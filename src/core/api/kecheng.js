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
  },
  /** 添加课程步骤一 */
  addKechengOne(param) {
    return {
      name: "添加课程步骤一",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/addkclistone",
      param: param
    };
  },
  /** 添加课程步骤二 */
  addKechengTwo(param) {
    return {
      name: "添加课程步骤二",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/addkclist",
      param: param
    };
  },
  /** 获取通告 */
  getNoticList(param) {
    return {
      name: "获取通告",
      method: "GET",
      url: "http://127.0.0.1:3000/notic",
      param: {}
    };
  }
};
