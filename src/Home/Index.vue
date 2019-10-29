<template>
  <div class="home">
    <Header></Header>
    <TopTab :nav="nav" :topNavNum="topNavNum" @onTopNav="onTopNav" />
    <router-view></router-view>
    <Foote></Foote>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Foote from "@/components/Foote.vue";
import TopTab from "./_components/TopTab.vue";
import Logic from "./Logic";
import Data from "./Data";
export default {
  components: {
    Header,
    Foote,
    TopTab
  },
  data() {
    return {
      ...Logic.data,
      ...Data
    };
  },
  methods: {
    ...Logic.methods
  },
  ...Logic.being
};
</script>

<style>
.home {
  /* background: url(http://127.1:3000/img/bg/bgone.jpg) no-repeat; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  position: relative;
  margin-top: 50px;
}
/** 蒙层 */
.home {
  border: 1px solid #ccc;
  /* Safari for macOS & iOS */
  -webkit-backdrop-filter: blur(5px);
  /* Google Chrome */
  backdrop-filter: blur(5px);
  /* 设置背景半透明黑色 */
  background: rgba(175, 173, 173, 0.7);
}
.home::before {
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
</style>
