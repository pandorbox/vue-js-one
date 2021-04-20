<template>
  <div class="components">
    <div class="user-nav">
      <div
        class="nav3-list"
        @click="tab(index)"
        v-for="(item,index) in items"
        :class="{active : index===curId}"
        :key="index"
      >
        <div class="nav3-list-name">{{item}}</div>
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
    tab(index) {
      this.$emit("tab", index);
    }
  }
};
</script>
<style lang="css" scoped>
.user-nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.nav3-list {
  line-height: 40px;
  border: none;
  width: 10%;
  margin-right: 20px;
  text-align: center;
}
.active {
  border-bottom: 2px solid red !important;
}
</style>
