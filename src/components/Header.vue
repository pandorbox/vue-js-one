<template>
  <!--header.html-->
  <header id="header" class="header">
    <div class="top">
      <div class="top-msg container">
        <!-- 登录状态 -->
        <div class="col-lg-7 col-md-7 col-sm-6 col-xs-6">
          <span v-if="!this.$store.state.islogin" class="nologin">
            <router-link to="/login">
              <span>登录</span>
            </router-link>
            <span>|</span>
            <router-link to="/register">
              <span>注册</span>
            </router-link>
          </span>
          <span v-if="this.$store.state.islogin" class="islogin">
            <span>{{this.$store.state.username}}</span> 您好！&nbsp;&nbsp;&nbsp;
            <router-link to="/login">
              <span>[退出]</span>
            </router-link>
          </span>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-6 col-xs-6">
          <div class="row">
            <div class="col-md-4 col-sm-4">
              <router-link to="/index">
                <span class="yzy-index white">YueDong首页</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
</script>
<style scoped>
/* header.css */
.top {
  height: 50px;
  background-color: #d9e4e9;
  overflow: hidden;
}
.top-msg > div {
  line-height: 49px;
  height: 100%;
}
.top-msg div:first-child {
  text-align: left;
}
.top-msg div:last-child div {
  display: flex;
  text-align: right;
  justify-content: flex-end;
}
.cart-img,
.coll-img {
  padding-bottom: 10%;
  padding-top: 10%;
  width: 30%;
  height: 80%;
}
</style>