<template>
  <div class="components nav">
    <div class="nav-list" @click="tab(index)" v-for="(item, index) in nav" :class="{ active: index === tabIndex }" :key="index">
      <div :class="{ active: index === tabIndex }" class="nav-list-name">{{ item }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nav: { default: {} },
    tabIndex: { default: 0 }
  },
  name: "Tab",
  data() {
    return {};
  },
  methods: {
    tab(index) {
      this.$emit("tab", index);
    }
  }
};
</script>
<style lang="css" scoped>
.nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.nav-list {
  line-height: 40px;
  border: none;
  width: 10%;
  margin-right: 20px;
  text-align: center;
}
.nav-list-name {
  color: white;
}
.active{
  border-bottom: 1px solid red;
}
</style>
