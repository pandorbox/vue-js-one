<template>
  <div class="components">
    <div class="study-nav">
      <div
        class="nav-list"
        @click="tab(index)"
        v-for="(item,index) in nav"
        :class="{active : index===curId}"
        :key="index"
      >
        <div class="nav-list-name">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nav: { default: {} },
    curId: { default: 0 }
  },
  name: "Test",
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
.study-nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ffffff;
}
.nav-list {
  line-height: 40px;
  border: none;
  width: 10%;
  margin-right: 20px;
  text-align: center;
}
.active {
  border-bottom: 2px solid red;
}
</style>
