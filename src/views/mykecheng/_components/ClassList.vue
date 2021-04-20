<template>
  <div class="components">
    <div class="list" v-for="(item, index) in items" :key="index">
      <div class="list-img">
        <img :src="item.kcimg" alt />
      </div>
      <div class="list-msg">
        <span>课程名称：{{ item.kcname }}</span>
        <span>课程简介：{{ item.kcjj }}</span>
        <span>发布时间：{{ item.time }}</span>
        <span>收藏次数：{{ item.shoucang }}</span>
        <span>订阅人数：{{ item.dingyue }}</span>
        <span>课程状态：{{ item.isshow == "false" ? "审核中" : "已发布" }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {}
  },
  name: "List",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="css" scoped>
.components {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.list {
  border-bottom: 1px solid #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
.list-img {
  width: 10%;
  margin-right: 40px;
}
.list-img > img {
  width: 100%;
  height: auto;
}
.list-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
