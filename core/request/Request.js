// tslint:disable:no-parameter-reassignment
// tslint:disable:no-inferrable-types
import Vue from "vue";

/**
 * 请求
 */
export default class Request {
  /**
   * 调用
   * @param  apiObject api对象
   */
  async call(apiObject) {
    const data = [];
    switch (apiObject.method) {
      case Get:
        const Result = await Vue.prototype.$http
          .get(apiObject.url, apiObject.param)
          .then(res => {
            data = res.data;
          })
          .catch(err => {
            alert(err);
          });
        break;
      case Post:
        const Result = await Vue.prototype.$http
          .post(apiObject.url, apiObject.param)
          .then(res => {
            data = res.data;
          })
          .catch(err => {
            alert(err);
          });
        break;
    }
    return data;
  }
}
