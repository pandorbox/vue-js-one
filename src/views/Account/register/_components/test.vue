<template>
  <div id="container" class="container">
    <table></table>
    <div class="black">
      <table class="table">
        <tr class="table-tr">
          <td>
            <h4>注册YueDong</h4>
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text" placeholder="请输入您的用户名" class="uname" v-model="username" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="password" placeholder="请输入您的密码" class="upwd" v-model="userpwd" />
          </td>
        </tr>
        <tr>
          <td class="autoLogin">
            <span></span>
          </td>
          <td>
            <span></span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="button" value="注册 " class="btn login btn-danger" @click="button()" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  name: "Test",
  data() {
    return {
      username: "",
      userpwd: ""
    };
  },
  mounted() {},
  methods: {
    button() {
      this.$emit("button", { name: this.username, pwd: this.userpwd });
    }
  }
};
</script>
<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.black {
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 100px;
}
.black table {
  width: 100%;
}
h4 {
  color: #fff;
  margin: 0;
}
a {
  color: #fff;
  text-decoration: none;
  font-size: 12px;
}
input.uname,
input.upwd {
  width: 100%;
  height: 35px;
  border: none;
  outline: 0;
  padding-left: 15px;
  box-sizing: border-box;
  /* background: #fff url(../img/yhm.png) no-repeat 97% center; */
}

input.login {
  width: 100%;
  height: 36px;
  margin-top: 20px;
}
td.autoLogin {
  color: #fff;
  font-size: 12px;
}
.table {
  border-collapse: separate;
  border-spacing: 20px;
}
</style>
