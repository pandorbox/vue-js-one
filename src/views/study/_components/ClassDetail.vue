<template>
  <div class="components">
    <div class="nav-msg">
      <div class="nav-msg-list" v-for="(item, index) in items" :key="index">
        <div class="nav-msg-list-tit">
          <div nav-msg-list-tit-logo-text>
            <span>课程概述</span>
          </div>
        </div>
        <div class="nav-msg-list-msg">{{item.kcjj}}</div>
        <div class="nav-msg-list-tit">
          <div nav-msg-list-tit-logo-text>
            <span>课程目标</span>
          </div>
        </div>
        <div class="nav-msg-list-msg">{{item.kcmb}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { default: {} }
  },
  name: "Test",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="css" scoped>
.nav-msg-list {
  width: 100%;
}
.nav-msg-list-tit {
  margin-top: 40px;
  width: 7%;
  border-bottom: 1px solid white;
  height: 40px;
  line-height: 40px;
  display: flex;
  opacity: 0.8;
  color: white;
  z-index: 10;
}
.nav-msg-list-tit-logo {
  width: 60px;
  height: 30px;
  margin-right: 20px;
}
.nav-msg-list-msg {
  padding-right: 10px;
  margin-top: 10px;
  width: 50%;
  line-height: 30px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
</style>
