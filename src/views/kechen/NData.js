import Vue from "vue";
import Call from "@/core/request/Request";
import Api from "@/core/api/index";
export default {
  /** 获取初始数据 */
  async getData() {
    let data = [];
    const Res = await Call(Api.Kecheng.deafultList());
    data = Res;
    return data;
  },
  /** 获取tab切换数据 */
  async getTabData(param) {
    let data = [];
    let kcclass = param.nav[param.index].kcclass;
    const Res = await Call(Api.Kecheng.tabCutList({ _kcclass: kcclass }));
    data = Res;
    return data;
  }
};
