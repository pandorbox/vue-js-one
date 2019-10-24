import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [], //始数据组
    isdy: true,
    isaduio: false,
    id: 0,
    tit: "",
    curId: 0,
    kcdetail: [],
    kcpjmsg: "",
    userimg: "",
    userjf: 0,
    nav: ["课程详情", "课程评价"],
    pinjia: []
  },
  async mounted(param) {
    this.data.items = await NData.getData();
    console.log("data:", this.data.items);
    console.log("router", param);
  },
  methods: {
    async onClick(param) {}
  }
};
