<template>
  <div class="page">
    <Header></Header>
    <div class="container">
      <ClassMsg :items="items.classDetail" :isdy="isdy" @dinyue="dinyue" @guanzhu="guanzhu" />
      <Tab :nav="nav" :curId="curId" @tab="tab" />
      <ClassDetail v-if="curId == 0" :items="items.classDetail" />
      <ClassPinglun v-if="curId == 1" :items="items.classPinjia" @addpj="addpj" />
    </div>
    <Foote></Foote>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Foote from "@/components/Foote.vue";
import ClassMsg from "./_components/ClassMsg.vue";
import Logic from "./Logic";
import Data from "./Data";
import Tab from "./_components/Tab.vue";
import ClassDetail from "./_components/ClassDetail.vue";
import ClassPinglun from "./_components/ClassPinglun.vue";
export default {
  components: { Header, Foote, ClassMsg, Tab, ClassDetail, ClassPinglun },
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
.page {
  padding-top: 50px;
  background-color: #ccc;
}
.container {
  margin-top: 50px;
  margin-bottom: 200px;
  padding-bottom: 100px;
  border: 1px solid #ffffff;
}
.study {
  margin-top: 20px;
  padding-bottom: 40px;
}
</style>
