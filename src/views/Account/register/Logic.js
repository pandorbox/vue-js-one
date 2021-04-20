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
  async mounted() {
    this.data.items = await NData.getData();
  },
  methods: {
    async onClick(param) {},
    async button(param) {
      let res = await NData.register({ username: param.name, userpwd: param.pwd });
      if (res == 1) {
        alert("注册成功!");
        this.$router.push("/login");
      } else {
        alert(res.msg);
      }
    }
  }
};
