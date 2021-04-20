import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api/index";
export default {
  /** 获取初始数据 */
  async getData() {
    let data = [];
    const ResOne = await Call(Api.Kecheng.indexGetClassListOne());
    const ResTwo = await Call(Api.Kecheng.indexGetClassListTwo());
    const ResThr = await Call(Api.Kecheng.indexGetClassListThr());
    const ResFou = await Call(Api.Kecheng.indexGetClassListFou());
    data[0] = ResOne;
    data[1] = ResTwo;
    data[2] = ResThr;
    data[3] = ResFou;
    return data;
  }
};
