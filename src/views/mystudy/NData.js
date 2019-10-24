import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api/index";
export default {
  /** 获取初始数据 */
  async getData(param) {
    let data = {};
    const resMsg = await Call(Api.Account.userMsg({ _username: param._name }));
    const resNoteBook = await Call(Api.Account.getNoteBook({ _username: param._name }));
    const resGuanzhu = await Call(Api.Account.getGuanzhu({ _username: param._name }));
    const resDingyue = await Call(Api.Account.getDingyue({ _username: param._name }));
    const resMyKecheng = await Call(Api.Account.myKecheng({ _username: param._name }));

    // const resDetail = await Call(Api.Account.getListDetail({ _kcclass: param._kcclass, _id: param._id }));
    data.userMsg = resMsg;
    data.noteBook = resNoteBook;
    data.guanzhu = resGuanzhu;
    data.dingyue = resDingyue;
    data.myKecheng = resMyKecheng;

    // data.classDetail = resDetail;
    return data;
  },
  /** 添加个人笔记 */
  async addNoteBook(param) {
    let res = await Call(
      Api.Account.addNoteBook({
        _bjtime: param._bjtime,
        _username: param._username,
        _bjtit: param._bjtit,
        _bjmsg: param._bjmsg
      })
    );
    if (!res) return;
    let newRes = await Call(Api.Account.getNoteBook({ _username: param._username }));
    return newRes;
  }
};
