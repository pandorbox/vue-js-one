import Vue from "vue";
import { Request as Call } from "../request/Request";
import Api from "../api/index";

/** 获取网络数据 */
export class BaseGetData {
  api = new Api();
  call = new Call();
  /** 获取初始数据 */
  async getData() {
    let data = [];
    let res = this.call;
    return data;
  }
}
