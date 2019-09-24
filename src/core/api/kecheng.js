/**
 * 课程
 */
import ParamUtils from "../base/ParamUtils";
export default {
  /** 默认列表 */
  deafultList(param) {
    return {
      name: "默认列表",
      method: "GET",
      url: "http://127.0.0.1:3000/defkclist",
      param: {}
    };
  },
  /** tab 切换列表 */
  tabCutList(param) {
    return {
      name: "tab列表",
      method: "POST",
      url: "http://127.0.0.1:3000/thiskclist",
      param: ParamUtils.format(param)
    };
  }
};
