import Vue from "vue";
/**
 * 请求
 * @param  apiObject api对象
 */
let Request = async function(apiObject) {
  let data = [];
  if (apiObject.method == "GET") {
    await Vue.prototype.$http
      .get(apiObject.url, apiObject.param)
      .then(res => {
        console.log("res:", res);
        data = res.data;
      })
      .catch(err => {
        alert(err);
      });
  } else {
    await Vue.prototype.$http
      .post(apiObject.url, apiObject.param)
      .then(res => {
        console.log("res:", res);
        data = res.data;
      })
      .catch(err => {
        alert(err);
      });
  }
  return data;
};
// };
export { Request as default };
