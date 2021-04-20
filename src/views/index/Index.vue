<template>
  <div class="container components">
    <Banner />
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
  methods: {
    ...Logic.methods
  },
  ...Logic.being
};
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
}
</style>
