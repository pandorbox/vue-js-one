import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    /** 初始数据组 */
    items: [],
    /** 是否弹窗 */
    thistc: false,
    kcauthor: "",
    kcclass: "",
    kcname: "",
    kcjj: "",
    kcjf: 0,
    kcgs: "",
    kcimg: [],
    id: "",
    tit: "",
    /** tab下标 */
    tabIndex: 0,
    /** tab选项 */
    nav: ["我的课程", "新添课程", "修改课程"],
    mykc: [],
    pinjia: []
  },
  /**
   * 生命周期
   */
  being: {
    async beforeCreate() {}, // 组件实例刚被创建
    async created() {}, // 组件实例创建完成
    async beforeMount() {
      // 挂载前
    },
    async mounted() {
      // 挂载后
      let name = await this.$store.state.username;
      this.items = await NData.getData({ username: name });
      console.log("data:", this.items);
    },
    async beforeUpdate() {
      // 组件更新前
    },
    async updated() {
      // 组件更新后
    }
  },
  methods: {
    async onClick(param) {},
    async tab(index) {
      this.tabIndex = index;
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
    async upPhoto() {
      let data = new FormData();
      let files = userinputFile.files;
      for (let item of files) {
        data.append("userimg", item);
      }
      let username = this.$store.state.username;
      data.append("username", username);
      let res = await NData.changePhoto(data);
      if (res) {
        this.items["userMsg"].splice(0, 1, res);
      } else {
        alert("上传失败");
      }
    },
    /** 开启弹窗 */
    openTanc() {
      this.thistc = true;
    },
    /** 关闭弹窗 */
    closeTanc() {
      this.thistc = false;
    },
    /** 修改昵称简介 */
    async changeMsg(param) {
      if (param.userNc == "") {
        alert("请输入昵称！");
        return;
      } else if (param.userJs == "") {
        alert("请输入个人简介！");
        return;
      } else {
        let res = await NData.changeMsg({
          _kcimg: this.kcimg,
          _username: this.$store.state.username,
          _usernc: param.userNc,
          _userjj: param.userJs
        });
        this.items.userMsg = res;
        this.thistc = false;
      }
    }
  }
};
