import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api/index";
export default {
  /** 获取初始数据 */
  async getData() {
    let data = [];
    const Res = await Call(Api.Kecheng.getNoticList());
    data = Res;
    return data;
  }
};
