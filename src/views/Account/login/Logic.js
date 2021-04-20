import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [], //始数据组
    /** 用户名 */
    username: "",
    /** 密码 */
    userpwd: ""
  },
  async mounted(param) {
    this.data.items = await NData.getData();
    console.log("data:", this.data.items);
  },
  methods: {
    async onClick(param) {},
    async login(param) {
      let res = await NData.login({ username: param.name, userpwd: param.pwd });
      if (res == 1) {
        alert("登陆成功!");
        this.$store.commit("signin", param.name);
        this.$router.push("/index");
      } else {
        alert(res.msg);
      }
    }
  }
};
