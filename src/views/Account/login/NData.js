import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api/index";
export default {
  /** 获取初始数据 */
  async getData() {
    let data = [];
    // const Res = await Call(Api);
    // data = Res;
    return data;
  },
  /** 登录 */
  async login(param) {
    let data = [];
    const Res = await Call(Api.Account.login({ _username: param.username, _userpwd: param.userpwd }));
    console.log("res", Res);
    // const Res = await Call(Api.Kecheng.tabCutList({ _kcclass: kcclass }));
    data = Res;
    return data;
  }
};
