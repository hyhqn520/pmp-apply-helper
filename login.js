const config = require("./config");
const axios = require("axios");
const CancelToken = axios.CancelToken;
async function login(Cookie) {
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
      const res = await axios.post(
        "http://exam.chinapmp.cn/App_Ajax/SHOW.Ajax.Exam.Login,SHOW.Ajax.ajax?domain=exam",
        {
          JSON_DATA: [
            {
              Name: "uType",
              Value: 0,
            },
            {
              Name: "uName",
              Value: config.userName,
            },
            {
              Name: "uPass",
              Value: config.password,
            },
          ],
        },
        {
          cancelToken: source.token,
          headers: {
            Cookie,
            "X-UNEXT.Ajax-Method": "Save",
            "X-UNEXT.Ajax-Token": "573533aa.D7F2C084860C87BD61706E14D49CA92C",
          },
        }
      );
      console.log(`登录并发${i},第${tryNumber}次,${res.status}`);
      if (res.status === 200) {
        reqQueue.forEach(item => item.cancel());
        console.log(`登录并发${i},第${tryNumber}次，成功`);
        return true;
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled");
      } else {
        return init(i, tryNumber + 1);
      }
    }
  }
}
module.exports = login;
