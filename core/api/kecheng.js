/**
 * 课程
 */
export default class Kecheng {
  /** 默认列表 */
  deafultList(param) {
    return {
      name: "默认列表",
      method: "Get",
      url: "http://127.0.0.1:3000/defkclist",
      param: {}
    };
  }
}
