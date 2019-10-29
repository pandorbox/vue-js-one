<template>
  <div class="page container">
    <UserMsg :items="items.userMsg" />
    <Tab :items="nav" :curId="curId" @tab="tab" />
    <Cards :curId="curId" :items="items" />
    <AddNoteBook v-if="curId == 4" :items="items.noteBook" @openTanc="openTanc" />
    <Tanc :thistc="thistc" @closeTanc="closeTanc" @addNoteBook="addNoteBook" />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Foote from "@/components/Foote.vue";
import Logic from "./Logic";
import Data from "./Data";
import UserMsg from "./_components/UserMsg.vue";
import Tab from "./_components/Tab.vue";
import Cards from "./_components/Cards.vue";
import AddNoteBook from "./_components/AddNoteBook.vue";
import Tanc from "./_components/Tanc.vue";
export default {
  components: { Header, Foote, UserMsg, Tab, Cards, Tanc, AddNoteBook },
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
  display: flex;
  flex-direction: column;
}
</style>
