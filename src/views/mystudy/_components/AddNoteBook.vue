<template>
  <div class="components">
    <div class="nav3-msg">
      <div class="add-nootbook">
        <button class="btn btn-info" @click="openTanc()">+新增读书笔记</button>
      </div>
      <div class="nav3-nootbook" v-for="(item, index) in items" :key="index">
        <div class="nootbook-tit">{{item.bjtit}}</div>
        <div class="nootbook-msg">{{item.bjmsg}}</div>
        <div class="nootbook-time">{{item.bjtime}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { default: {} },
    curId: { default: 0 }
  },
  name: "Test",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    openTanc() {
      this.$emit("openTanc", {});
    }
  }
};
</script>
<style lang="css" scoped>
/* 读书笔记 */
.add-nootbook {
  width: 100%;
  padding-left: 40%;
  line-height: 80px;
}
.add-nootbook button {
  height: 30px;
}
.nootbook-tit {
  margin-top: 30px;
  line-height: 40px;
  font-weight: 600;
}
.nootbook-msg {
  padding-left: 20px;
  width: 80%;
  border: 1px solid #ccc;
  border-bottom: none;
  line-height: 30px;
  text-decoration: black;
}
.nootbook-time {
  width: 80%;
  border: 1px solid #ccc;
  border-top: none;
  text-align: right;
  padding-right: 20px;
}
</style>
