const config = require("./config");
const axios = require("axios");
const CancelToken = axios.CancelToken;
async function agreement(Cookie) {
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
        "http://user.chinapmp.cn/App_Ajax/SHOW.Ajax.User.Examsign,SHOW.Ajax.ajax?doing=sign&domain=user",
        {
          JSON_DATA: [
            {
              Name: "Ed",
              Value: 10000044,
            },
          ],
        },
        {
          cancelToken: source.token,
          headers: {
            Cookie,
            "X-UNEXT.Ajax-Method": "Agree",
            "X-UNEXT.Ajax-Token": "9488eb24.4264559643FDC8C5050734DCE6E984F7",
          },
        }
      );
      console.log(`同意协议并发${i},第${tryNumber}次,${res.status}`);
      if (res.status === 200) {
        reqQueue.forEach(item => item.cancel());
        console.log(`同意协议并发${i},第${tryNumber}次，成功`);
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
module.exports = agreement;
