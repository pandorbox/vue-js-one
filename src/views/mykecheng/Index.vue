<template>
  <div class="page container">
    <Tanc v-if="thistc" :thistc="thistc" @changeMsg="changeMsg" @close="closeTanc" />
    <UserMsg :items="items.userMsg" @openTanc="openTanc" @upPhoto="upPhoto" />
    <Tab :nav="nav" @tab="tab" :tabIndex="tabIndex" />
    <ClasList v-if="tabIndex == 0" :items="items.myKecheng" />
    <AddClass v-if="tabIndex == 1" @kcaudio="kcaudio" @addlist="addlist" />
    <div>{{items.userMsg}}</div>
    <ChangeClass v-if="tabIndex == 2" />
  </div>
</template>
<script>
import Logic from "./Logic";
import Data from "./Data";
import Tanc from "./_components/Tanc.vue";
import UserMsg from "./_components/UserMsg.vue";
import Tab from "./_components/Tab.vue";
import ClasList from "./_components/ClassList.vue";
import AddClass from "./_components/AddClass.vue";
import ChangeClass from "./_components/ChangeClass.vue";
export default {
  components: { Tanc, UserMsg, Tab, ClasList, AddClass, ChangeClass },
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
  border: 1px solid #ffffff;
  padding-bottom: 200px;
  height: 100%;
}
</style>
