<template>
  <div class="components">
    <div class="user-msg" v-for="(item,index) in items" :key="index">
      <div class="user-msg-img">
        <img :src="item.userimg" alt />
      </div>
      <div class="user-msg-text">
        <p>用户：&nbsp;&nbsp;{{item.username}}</p>
        <p>简介：&nbsp;&nbsp;{{item.userjj}}</p>
        <p>积分：&nbsp;&nbsp;{{item.userjf}}</p>
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
