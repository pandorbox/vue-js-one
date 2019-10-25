import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api/index";
export default {
  /** 获取初始数据 */
  async getData(param) {
    let data = [];
    const resClassDetail = await Call(Api.Account.getListDetail({ _id: param._route.id }));
    const resClassPinjia = await Call(Api.Account.getClassPinjia({ _kcid: param._route.id }));
    const resUserMsg = await Call(Api.Account.userMsg({ _username: param._username }));
    const resIsDinyue = await Call(Api.Account.isDinyue({ _username: param._username, _kcid: param._route.id }));
    data.classDetail = resClassDetail;
    data.classPinjia = resClassPinjia.code ? [] : resClassPinjia;
    data.userMsg = resUserMsg;
    data.isDinyue = resIsDinyue;

    return data;
  },
  /** 添加关注 */
  async addGuanzhu(param) {
    let res = await Call(Api.Account.addGuanzhu({ _username: param._username, _kcid: param._kcid }));
    return res;
  },
  /** 添加订阅 */
  async addDinyue(param) {
    let res = await Call(Api.Account.addDinyue({ _username: param._username, _kcid: param._kcid }));
    return res;
  },
  /** 添加评价 */
  async addPingjia(param) {
    let res = await Call(
      Api.Account.addPingjia({
        _pjtime: param._pjtime,
        _userimg: param._userimg,
        _kcpjmsg: param._kcpjmsg,
        _username: param._username,
        _kcid: param._kcid
      })
    );
    return res;
  }
};
