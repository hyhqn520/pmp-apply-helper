const config = require("./config");
const axios = require("axios");
const CancelToken = axios.CancelToken;
const JSDOM = require("jsdom").JSDOM;
async function testSite(Cookie) {
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
      const res = await axios.get(
        "http://user.chinapmp.cn/examsign;sign.shtml",
        {
          cancelToken: source.token,
          headers: {
            Cookie,
          },
        }
      );
      console.log(`获取考点并发${i},第${tryNumber}次,${res.status}`);
      if (res.status === 200) {
        const frag = JSDOM.fragment(res.data);
        let testSiteNodes = frag.querySelectorAll("#Kaodian option");
        const testSites = [];
        testSiteNodes.forEach(item => {
          if (item.value !== "0") {
            testSites.push({
              label: item.text,
              value: item.value,
            });
          }
        });
        if (testSites.length === 0) {
          console.log("未获取到考点，重新获取。");
          return init(i, tryNumber + 1);
        } else {
          reqQueue.forEach(item => item.cancel());
          return testSites;
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
module.exports = testSite;
