<template>
  <div class="page container">
    <Tab :items="nav" :curId="curId" @onTab="onTab" />
    <List :items="items" @item="onItem" />
  </div>
</template>
<script>
import Swiper from "swiper";
import Logic from "./Logic";
import Data from "./Data";
import Tab from "./_components/Tab.vue";
import List from "./_components/List.vue";
export default {
  components: { Tab, List },
  name: "Kechen",
  data() {
    return {
      ...Logic.data,
      ...Data
    };
  },
  methods: {
    ...Logic.methods
  },
  ...Logic.being
};
</script>
<style lang="css" scoped>
.page{
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  background-color: rgb(156, 150, 150);
  padding-bottom: 300px;
}
</style>
