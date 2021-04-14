const config = require("./config");
const axios = require("axios");
const CancelToken = axios.CancelToken;
async function apply(Cookie, selectedTestSite = {}) {
  const reqQueue = [];
  const awaitQueue = [];
  for (let i = 0; i < config.concurrency; i++) {
    awaitQueue.push(init(i, 1));
  }
  const resultList = await Promise.all(awaitQueue);
  let result;
  for (let i = 0; i < resultList.length; i++) {
    result = resultList[i];
    if (result) return result;
  }
  async function init(i, tryNumber) {
    const source = CancelToken.source();
    reqQueue.push(source);
    try {
      const JSON_DATA = buildApplyData();
      const res = await axios.post(
        "http://user.chinapmp.cn/App_Ajax/SHOW.Ajax.User.Examsign,SHOW.Ajax.ajax?doing=sign&domain=user",
        {
          JSON_DATA,
        },
        {
          cancelToken: source.token,
          headers: {
            Cookie,
            "X-UNEXT.Ajax-Method": "Sign",
            "X-UNEXT.Ajax-Token": "9488eb24.4264559643FDC8C5050734DCE6E984F7",
          },
        }
      );
      console.log(`报名并发${i},第${tryNumber}次,${res.status}`);
      if (res.status === 200) {
        reqQueue.forEach(item => item.cancel());
        if (res.data.error) {
          console.log(res.data.error);
          return false;
        } else {
          console.log(`报名成功, 开始验证。`);
          return true;
        }
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled");
      } else {
        return init(i, tryNumber + 1);
      }
    }
  }
  function buildApplyData() {
    const staticApplyData = {
      IsPMIUser: false,
      PMINumber: "",
      _PMIUtimeB: "",
      _PMIUtimeE: "",
      Ed: 10000044,
      Etitle: " 2021年6月20日项目管理资格认证考试",
      Stype: 101,
      StypeName: "项目管理师(PMP®)",
      Zhong: "",
    };
    let dynamicApplyData = {
      ...config.applyData,
      ...selectedTestSite,
    };
    dynamicApplyData.PMItimeB = `/Date(${new Date(
      dynamicApplyData.PMItimeB + " 00:00:00"
    ).getTime()}+0800)/`;
    dynamicApplyData.PMItimeE = `/Date(${new Date(
      dynamicApplyData.PMItimeE + " 00:00:00"
    ).getTime()}+0800)/`;
    return Object.entries({
      ...staticApplyData,
      ...dynamicApplyData,
    }).map(item => ({
      Name: item[0],
      Value: item[1],
    }));
  }
}
module.exports = apply;
