<template>
  <div class="components">
    <div class="nav2-msg">
      <div class="nav2-usermsg-list" v-for="(item, index) in pinjia" :key="index"></div>
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
.list-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
