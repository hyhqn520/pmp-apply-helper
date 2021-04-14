const config = require("./config");
const axios = require("axios");
const CancelToken = axios.CancelToken;
const JSDOM = require("jsdom").JSDOM;
async function validate(Cookie) {
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
      const res = await axios.get("http://user.chinapmp.cn/myexam.shtml", {
        cancelToken: source.token,
        headers: {
          Cookie,
        },
      });
      console.log(`验证并发${i},第${tryNumber}次,${res.status}`);
      if (res.status === 200) {
        const err = res.data.indexOf("出错啦") > -1;
        if (err) {
          return init(i, tryNumber + 1);
        } else {
          return res.data.indexOf("报名成功") > -1;
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
}
module.exports = validate;
