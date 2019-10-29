<template>
  <div class="components">
    <div class="user-msg" v-for="(item, index) in items" :key="index">
      <div class="user-msg-img">
        <img :src="item.userimg" alt />
      </div>
      <div class="user-msg-text">
        <p></p>
        <p>昵称：{{ item.usernc }}</p>
        <p>简介：{{ item.userjj }}</p>
      </div>
      <div class="user-msg-xg">
        <div class="btn btn-success" @click="openTanc()">修改资料</div>
        <form action class="userimg">
          <div class="userimgbtn">上传头像</div>
          <input
            class="user-img-input"
            type="file"
            multiple
            id="userinputFile"
            @change="upPhoto()"
            name="userimg"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserMsg",
  props: {
    items: {}
  },
  data() {
    return {};
  },
  methods: {
    openTanc() {
      this.$emit("openTanc", {});
    },
    upPhoto() {
      this.$emit("upPhoto", {});
    }
  }
};
</script>
<style lang="css" scoped>
.user {
  margin-top: 20px;
}
.user-tit {
  width: 10%;
  line-height: 50px;
  font-size: 15px;
}
.user-msg {
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.user-msg > div {
  margin-left: 20px;
}
.user-msg-xg {
  height: 35px;
  width: 200px;
  display: flex;
  overflow: hidden;
}
.userimg {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: red;
  margin-left: 35px;
  width: 80px;
  height: 100%;
  border-radius: 5px;
  text-align: center;
}
.userimgbtn {
  position: absolute;
  top: 5px;
  width: 100%;
  height: 100%;
  left: 5px;
  text-align: center;
  color: white;
}
.user-img-input {
  position: relative;
  top: 0px;
  opacity: 0;
}
.user-msg-img {
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
}
.user-msg-text {
  width: 50%;
}
</style>
