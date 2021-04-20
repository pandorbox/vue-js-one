<template>
  <div class="components container">
    <div class="top-nav container">
      <!-- logo -->
      <div class="row">
        <div class="logo-img col-lg-2 col-md-2 logoimg">
          <img src="http://127.0.0.1:3000/img/logo/logo.jpg" alt />
        </div>
        <!-- 菜单 -->
        <div class="top-nav-one col-lg-6 col-md-6">
          <ul class>
            <li v-for="(item, index) in nav" @click="onTopNav(index)" :key="item.name">
              <router-link to="/">
                <span style="color:white" v-bind:class="index == topNavNum ? 'istopnav' : ''">{{ item.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 搜索 -->
        <div class="search col-lg-4 col-md-4">
          <div class="search-input">
            <input type="text" placeholder="搜索" />
            <div>
              <img src="@/assets/img/header/search.png" alt srcset />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nav: { default: [] },
    topNavNum: { default: 0 }
  },
  name: "Test",
  data() {
    return {};
  },
  methods: {
    onTopNav(index) {
      this.$emit("onTopNav", index);
    }
  }
};
</script>
<style lang="css" scoped>
/* 顶部导航 */
.top-nav {
  height: 80px;
}
.logoimg {
  height: 80px;
}
.logoimg img {
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
}
.top-nav-one ul {
  font-size: 16px;
  line-height: 80px;
  display: flex;
  list-style: none;
  justify-content: space-around;
}
.top-nav-one ul > li:focus {
  text-decoration: none;
}
.top-nav-one ul > li span {
  color: black;
}
.top-nav-one ul > li span:hover {
  color: #54d1a3;
}

.search-input {
  margin-top: 5%;
  display: flex;
}
.search-input input {
  padding-left: 5%;
  width: 100%;
  height: 40px;
  outline: medium;
}
.search-input div {
  padding-top: 1%;
  padding-bottom: 1%;
  position: relative;
  left: -50px;
  width: 14%;
  height: 40px;
}
.homenav {
  color: white;
}
.istopnav {
  color: red !important;
}
/* .router-link-exact-active{
    background-color: #54d1a3;
  } */
</style>
