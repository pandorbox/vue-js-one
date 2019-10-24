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
  },
  /** 用户信息 */
  userMsg(param) {
    return {
      name: "用户信息",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/mymsg",
      param: ParamUtils.format(param)
    };
  },
  /** 我的课程 */
  myKecheng(param) {
    return {
      name: "我的课程",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/mykc",
      param: ParamUtils.format(param)
    };
  },
  /** 修改信息 */
  changeMsg(param) {
    return {
      name: "修改信息",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/addmymsg",
      param: ParamUtils.format(param)
    };
  },
  /** 修改头像 */
  changePhoto(param) {
    return {
      name: "修改头像",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/adduserimg",
      param: param
    };
  },
  /** 添加个人笔记 */
  addNoteBook(param) {
    return {
      name: "添加个人笔记",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/addmybj",
      param: ParamUtils.format(param)
    };
  },
  /** 获取个人笔记 */
  getNoteBook(param) {
    return {
      name: "获取个人笔记",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/mybj",
      param: ParamUtils.format(param)
    };
  },
  /** 获取关注列表 */
  getGuanzhu(param) {
    return {
      name: "获取关注列表",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/myguanzhu",
      param: ParamUtils.format(param)
    };
  },
  /** 获取订阅列表 */
  getDingyue(param) {
    return {
      name: "获取订阅列表",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/mydinyue",
      param: ParamUtils.format(param)
    };
  },
  /** 获取课程详情 */
  getListDetail(param) {
    return {
      name: "获取课程详情",
      method: "POST",
      url: "http://127.0.0.1:3000/thiskclistdetail",
      param: ParamUtils.format(param)
    };
  }
};
