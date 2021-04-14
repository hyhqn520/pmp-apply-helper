const config = require("./config");
const inquirer = require("inquirer");
const visit = require("./visit");
const login = require("./login");
const agreement = require("./agreement");
const testSite = require("./test-site");
const applyExam = require("./apply-exam");
const validate = require("./validate");
(async () => {
  const cookie = await visit();
  console.log("获取会话cookie", cookie);
  if (!cookie) return;
  const loginResult = await login(cookie);
  console.log("登录", loginResult);
  const agreementResult = await agreement(cookie);
  console.log("防疫签署", agreementResult);
  let selectedTestSite = {
    Kaodian: config.applyData.Kaodian,
    Kaodianming: config.applyData.Kaodianming,
  };
  if (!selectedTestSite.Kaodian || !selectedTestSite.Kaodianming) {
    const testSiteList = await testSite(cookie);
    console.log(testSiteList);
    const { testSite } = await inquirer.prompt([
      {
        type: "list",
        name: "testSite",
        message: "选择你想报名的考点?",
        choices: testSiteList.map(item => item.label),
        filter(val) {
          const testSite = testSiteList.find(item => item.label === val);
          return {
            Kaodian: testSite.value,
            Kaodianming: testSite.label,
          };
        },
      },
    ]);
    selectedTestSite = testSite;
  }
  const result = await applyExam(cookie, selectedTestSite);
  if (result) {
    const validateResult = await validate(cookie);
    if (validateResult) {
      console.log("验证报名成功");
    } else {
      console.log("验证报名失败");
    }
  } else {
    console.log("执行结束");
  }
})();
