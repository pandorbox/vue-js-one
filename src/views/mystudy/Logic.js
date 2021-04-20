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
  /**
   * 生命周期
   */
  being: {
    async beforeCreate() {}, // 组件实例刚被创建
    async created() {}, // 组件实例创建完成
    async beforeMount() {}, // 挂载前
    async mounted() {
      // 挂载后
      let name = this.$store.state.username;
      this.items = await NData.getData({ _name: name });
      console.log("data:", this.items);
    },
    async beforeUpdate() {}, // 组件更新前
    async updated() {} // 组件更新后
  },
  methods: {
    async onClick(param) {},
    tab(index) {
      this.curId = index;
    },
    openTanc() {
      this.thistc = true;
    },
    closeTanc(index) {
      this.thistc = false;
    },
    // 添加笔记
    async addNoteBook(param) {
      let time = new Date();
      let yaear = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let bjtime = yaear + "-" + month + "-" + day;
      let res = await NData.addNoteBook({
        _bjtime: bjtime,
        _username: this.$store.state.username,
        _bjtit: param.tit,
        _bjmsg: param.msg
      });
      this.items.noteBook = res;
      this.thistc = false;
    }
  }
};
