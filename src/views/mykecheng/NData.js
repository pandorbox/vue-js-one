import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api";
export default {
  /** 获取初始数据 */
  async getData(param) {
    let data = [];
    const userMsg = await Call(Api.Account.userMsg({ _username: param.username }));
    const myKecheng = await Call(Api.Account.myKecheng({ _username: param.username }));
    data.userMsg = userMsg;
    data.myKecheng = myKecheng;
    return data;
  },
  /** 添加课程one */
  async addKechengOne(param) {
    const res = await Call(Api.Kecheng.addKechengOne(param));
    return res;
  },
  /** 添加课程two */
  async addKechengTwo(param) {
    const res = await Call(Api.Kecheng.addKechengTwo(param));
    return res;
  },
  /** 修改个人信息 */
  async changeMsg(param) {
    const res = await Call(
      Api.Account.changeMsg({
        _kcimg: param._kcimg,
        _username: param._username,
        _usernc: param._usernc,
        _userjj: param._userjj
      })
    );
    return res;
  },
  /** 修改头像 */
  async changePhoto(param) {
    const res = await Call(Api.Account.changePhoto(param));
    return res;
  }
};
