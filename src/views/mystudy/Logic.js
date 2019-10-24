import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [], //始数据组
    thistc: false,
    bjtit: "",
    bjmsg: "",
    bjturn: [],
    curId: 0,
    nav: ["未学完课程", "已学完课程", "我的订阅", "我的关注", "我的读书笔记"],
    mykecheng: []
  },
  async mounted(param) {
    this.data.items = await NData.getData({ _name: param._name });
    console.log("data:", this.data.items);
  },
  methods: {
    async onClick(param) {},
    tab(index) {
      this.curId = index;
    },
    /** 获取参数 */
    // async getRouterData() {
    //   console.log("router:", this.$route);
    //   this.data.id = await this.$route.params.id;
    //   this.data.tit = await this.$route.params.tit;
    // },
    istc() {
      this.thistc = true;
    },
    notc(index) {
      this.thistc = false;
    },
    // 添加笔记
    async adduserbj() {
      let time = new Date();
      let yaear = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let bjtime = yaear + "-" + month + "-" + day;
      let res = await NData.addNoteBook({
        _bjtime: bjtime,
        _username: this.$store.state.username,
        _bjtit: this.bjtit,
        _bjmsg: this.bjmsg
      });
      this.items.noteBook = res;
      this.thistc = false;
    }
  }
};
