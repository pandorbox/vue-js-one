<template>
  <div class="container components">
    <Banner />
    <div>{{items}}</div>
    <List :items="items" @router="routerTo" />
  </div>
</template>
<script>
// @ is an alias to /src
import Banner from "./_components/Banner.vue";
import List from "./_components/List.vue";
import Logic from "./Logic";
import Data from "./Data";
export default {
  components: { Banner, List },
  name: "Kechen",
  data() {
    return {
      ...Logic.data,
      ...Data
    };
  },
  async mounted() {
    await Logic.event.getData();
    console.log(this.items);
    // console.log("items:", this.items);
    // Logic.mounted();
  },
  methods: {
    ...Logic.event,
    ...Logic.methods
  }
};
</script>
<style lang="css" scoped>
</style>
