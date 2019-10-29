<template>
  <div class="page container">
    <Tanc
      v-if="thistc"
      :thistc="thistc"
      @changeMsg="changeMsg"
      @close="closeTanc"
      :userNc="userNc"
      :userJs="userJs"
    />
    <UserMsg :items="items.userMsg" @openTanc="openTanc" @upPhoto="upPhoto" />
    <Tab :nav="nav" @tab="tab" :tabIndex="tabIndex" />
    <ClasList v-if="tabIndex == 0" :items="items.myKecheng" />
    <AddClass v-if="tabIndex == 1" @kcaudio="kcaudio" @addlist="addlist" />
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
  components: { Tanc, UserMsg, Tab, ClasList, AddClass },
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

.user-nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
}

.addkecheng {
  padding-bottom: 40px;
}
form > div {
  margin-top: 20px;
  width: 100%;
  display: flex;
}
.add-tit {
  width: 10%;
  text-align: right;
  margin-right: 20px;
}
.input-short {
  width: 70px;
  border: none !important;
  border-bottom: 2px solid black !important;
  outline: medium;
  text-align: center;
}
.input-lang {
  width: 150px;
  border: none !important;
  border-bottom: 2px solid black !important;
  outline: medium;
}
.input-lizi {
  color: rgb(224, 221, 221);
  margin-left: 10px;
}
.submit {
  width: 100%;
  padding-left: 200px;
}
.addkc {
  margin-left: 200px;
  margin-top: 30px;
}
</style>
