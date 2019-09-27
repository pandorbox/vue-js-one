/**
 * 课程
 */
import ParamUtils from "../base/ParamUtils";
export default {
  /**  */
  login(param) {
    return {
      name: "登录",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/login",
      param: ParamUtils.format(param)
    };
  },
  /** 注册 */
  register(param) {
    return {
      name: "注册",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/registe",
      param: ParamUtils.format(param)
    };
  }
};
