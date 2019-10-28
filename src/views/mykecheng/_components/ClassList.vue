<template>
  <div class="components">
    <div class="list" v-for="(item, index) in items" :key="index">
      <div class="list-img">
        <img :src="item.kcimg" alt />
      </div>
      <div class="list-msg">
        <p>课程名称：{{ item.kcname }}</p>
        <p>课程简介：{{ item.kcjj }}</p>
        <p>发布时间：{{ item.time }}</p>
        <p>收藏次数：{{ item.shoucang }}</p>
        <p>订阅人数：{{ item.dingyue }}</p>
        <p>课程状态：{{ item.isshow == "false" ? "审核中" : "已发布" }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { default: {} }
  },
  name: "List",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="css" scoped>
.components{
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
.list-msg{
  display:flex;
  flex-direction: column;
  justify-content: center;
}
</style>
