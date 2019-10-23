<template>
  <div class="home">
    <div class="page">
      <Header></Header>
      <div class="top-nav container">
        <!-- logo -->
        <div class="row">
          <div class="logo-img col-lg-2 col-md-2 logoimg">
            <img src="http://127.0.0.1:3000/img/logo/logo.jpg" alt />
          </div>
          <!-- 菜单 -->
          <div class="top-nav-one col-lg-6 col-md-6">
            <ul class>
              <li v-for="(item,index) in nav" @click="topnavone(index)" :key="item.name">
                <router-link to="/">
                  <span
                    style="color:white"
                    v-bind:class="index==topnavn?'istopnav':''"
                  >{{item.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- 搜索 -->
          <div class="search col-lg-4 col-md-4">
            <div class="search-input">
              <input type="text" class value placeholder="搜索" />
              <div>
                <img src="@/assets/img/header/search.png" alt srcset />
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <Foote></Foote>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Foote from "@/components/Foote.vue";

export default {
  components: {
    Header,
    Foote
  },
  data() {
    return {
      nav: [
        { name: "首页" },
        { name: "课程" },
        { name: "公告" },
        { name: "我的课程" },
        { name: "我的学习" }
      ],
      topnavn: 0,
      index: false
    };
  },
  mounted: function() {
    var thispath = this.$route.path;
    if (thispath == "/index") {
      this.topnavn = 0;
    } else if (thispath == "/kechen") {
      this.topnavn = 1;
    } else if (thispath == "/notic") {
      this.topnavn = 2;
    } else if (thispath == "/mykecheng") {
      this.topnavn = 3;
    } else if (thispath == "/mystudy") {
      this.topnavn = 4;
    }
  },
  methods: {
    topnavone(index) {
      this.topnavn = index;
      if (index == 0) {
        this.$router.push({
          path: `index`
        });
      } else if (index == 1) {
        this.$router.push({
          path: `kechen`
        });
      } else if (index == 2) {
        this.$router.push({
          path: `notic`
        });
      } else if (index == 3) {
        if (!this.$store.state.islogin) {
          alert("请先登录！");
          this.$router.push({
            path: `login`
          });
          return;
        }
        this.$router.push({
          path: `mykecheng`
        });
      } else if (index == 4) {
        if (!this.$store.state.islogin) {
          alert("请先登录！");
          this.$router.push({
            path: `login`
          });
          return;
        }
        this.$router.push({
          path: `mystudy`
        });
      }
    }
  }
};
</script>

<style >
.home {
  /* background: url(http://127.1:3000/img/bg/bgone.jpg) no-repeat; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  position: relative;
}
/** 蒙层 */
.page {
  border: 1px solid #ccc;
  /* Safari for macOS & iOS */
  -webkit-backdrop-filter: blur(5px);
  /* Google Chrome */
  backdrop-filter: blur(5px);
  /* 设置背景半透明黑色 */
  background: rgba(175, 173, 173, 0.7);
}
/** 蒙层 */
.components {
  border: 1px solid #ccc;
  /* Safari for macOS & iOS */
  -webkit-backdrop-filter: blur(5px);
  /* Google Chrome */
  backdrop-filter: blur(5px);
  /* 设置背景半透明黑色 */
  background: rgba(175, 173, 173, 0.7);
}
.page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(10px) contrast(0.9);
  z-index: -1;
  background: url("/assets/login_bg.jpg") 0 / cover fixed;
}
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
