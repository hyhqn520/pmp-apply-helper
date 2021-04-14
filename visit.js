const config = require("./config");
const axios = require("axios");
const CancelToken = axios.CancelToken;
async function visit() {
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
      const res = await axios.get("http://exam.chinapmp.cn/", {
        cancelToken: source.token,
      });
      if (res.request.path === "/Error.htm?500") {
        console.log(`访问并发${i},第${tryNumber}次, 500`);
        return init(i, tryNumber + 1);
      } else {
        console.log(`访问并发${i},第${tryNumber}次,${res.status}`);
        if (res.status === 200) {
          const cookie = res.headers["set-cookie"]
            .map(item => item.split(";")[0])
            .join("; ");
          reqQueue.forEach(item => item.cancel());
          return cookie;
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
module.exports = visit;
