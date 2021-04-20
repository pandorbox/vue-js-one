<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
$("body").css("width", $(window).width());
export default {
  name: "App",
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    }
  }
};
</script>
 
<style>
body {
  overflow: scroll;
}
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* 标签统一样式 */
img {
  width: 100%;
  height: 100%;
}
a:hover {
  text-decoration: none;
}

a:focus {
  text-decoration: none;
}
/* 面包屑 */
.crumbs {
  width: 100%;
  line-height: 60px;
  font-size: 16px;
  box-shadow: 0px -1px 4px rgb(156, 153, 153);
  background-color: rgb(235, 224, 224);
}
/* 字体与背景样式 */
.white {
  color: white;
}
.hei {
  color: black;
}
.green {
  color: #54d1a3;
}
/* 清除input背景色 */
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
</style>
