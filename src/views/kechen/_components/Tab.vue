<template>
  <div class="components">
    <div class="nav">
      <div class="nav1-list" @click="onTab(index)" v-for="(item, index) in items" :key="index">
        <div class="nav1-list-img">
          <img :src="item.kcicon" alt srcset />
        </div>
        <div :class="{ active: index === curId }" class="nav1-list-name">{{ item.kcclass }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { default: [] },
    curId: { default: 0 }
  },
  name: "Tab",
  data() {
    return {};
  },
  methods: {
    onTab(index) {
      this.$emit("onTab", index);
    }
  }
};
</script>
<style lang="css" scoped>
.nav {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.nav1-list {
  margin-right: 40px;
  width: 13%;
  height: 40px;
  display: flex;
}
.router-link {
  width: 100%;
  height: 100%;
  display: flex;
}
.nav1-list-img {
  width: 20%;
  height: 80%;
}
.nav1-list-name {
  width: 50%;
  text-align: center;
  line-height: 40px;
  margin-left: 10%;
  color: white;
}
.active {
  border-bottom: 1px solid red;
  color: red;
}
</style>
