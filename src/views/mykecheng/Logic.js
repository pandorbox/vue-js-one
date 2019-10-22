import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [], //始数据组
    thistc: false,
    usernc: "",
    userjj: "",
    usermsg: [1],
    kcauthor: "",
    kcclass: "",
    kcname: "",
    kcjj: "",
    kcjf: 0,
    kcgs: "",
    kcimg: [],
    id: "",
    tit: "",
    curId: 0,
    nav: ["我的课程", "新添课程", "修改课程"],
    mykc: [],
    pinjia: []
  },
  async mounted(param) {
    this.data.items = await NData.getData({ username: param });
    console.log("data:", this.data.items);
  },
  methods: {
    async onClick(param) {},
    async tab(index) {
      this.curId = index;
    },
    async kcaudio() {
      var data = new FormData();
      data.append("kcauthor", inputkcauthor.value);
      data.append("kcclass", inputkcclass.value);
      data.append("kcname", inputkcname.value);
      data.append("kcjf", inputkcjf.value);
      var audiofiles = audioinputFile.files;
      for (let item of audiofiles) {
        data.append("kcaudio", item);
      }
      let res = await NData.addKechengOne(data);
      console.log(res);
      alert(res);
    },
    async addlist() {
      var data = new FormData();
      data.append("kcauthor", inputkcauthor.value);
      data.append("kcclass", inputkcclass.value);
      data.append("kcname", inputkcname.value);
      data.append("kcjj", inputkcjj.value);
      data.append("kcjf", inputkcjf.value);
      data.append("kcgs", inputkcgs.value);
      var imgfiles = imginputFile.files;
      for (let item of imgfiles) {
        data.append("kcimg", item);
      }
      let res = await NData.addKechengTwo(data);
      alert(res);
    },
    /** 修改头像 */
    async userimg() {
      var data = new FormData();
      var files = userinputFile.files;
      for (let item of files) {
        data.append("userimg", item);
      }
      var username = this.$store.state.username;
      data.append("username", username);
      let res = await NData.changePhoto(data);
      this.items.userMsg = res;
    },
    /** 开启弹窗 */
    istc() {
      this.thistc = true;
    },
    /** 关闭弹窗 */
    notc() {
      this.thistc = false;
    },
    /** 修改昵称简介 */
    async addusermsg() {
      console.log(this.$store.state.username);
      let res = await NData.changeMsg({
        _kcimg: this.kcimg,
        _username: this.$store.state.username,
        _usernc: this.usernc,
        _userjj: this.userjj
      });
      this.items.userMsg = res;
      this.thistc = false;
    }
  }
};
