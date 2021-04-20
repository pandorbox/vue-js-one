import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api/index";
export default {
  /** 获取初始数据 */
  async getData(param) {
    let data = {};
    /** 用户信息 */
    const resMsg = await Call(Api.Account.userMsg({ _username: param._name }));
    /** 用户笔记 */
    const resNoteBook = await Call(Api.Account.getNoteBook({ _username: param._name }));
    /** 关注列表（详情） */
    const resGuanzhu = await Call(Api.Account.getGuanzhu({ _username: param._name }));
    data.guanzhu = [];
    for (let i = 0; i < resGuanzhu.length; i++) {
      let id = resGuanzhu[i].kcid;
      let res = await Call(Api.Account.getListDetail({ _id: id }));
      data.guanzhu.push(res[0]);
    }
    /** 订阅列表(详情) */
    const resDingyue = await Call(Api.Account.getDingyue({ _username: param._name }));
    data.dingyue = [];
    for (let i = 0; i < resDingyue.length; i++) {
      let id = resDingyue[i].kcid;
      let res = await Call(Api.Account.getListDetail({ _id: id }));
      data.dingyue.push(res[0]);
    }
    /** 我的课程 */
    const resMyKecheng = await Call(Api.Account.myKecheng({ _username: param._name }));
    data.userMsg = resMsg;
    data.noteBook = resNoteBook;
    data.myKecheng = resMyKecheng.code ? [] : resMyKecheng;
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
    /** 刷新数据 */
    let newRes = await Call(Api.Account.getNoteBook({ _username: param._username }));
    return newRes;
  }
};
