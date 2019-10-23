<template>
  <div class="components container">
    <Banner />
    <List :items="items" />
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
    await Logic.mounted();
  },
  methods: {
    ...Logic.methods
  }
};
</script>
<style lang="css" scoped>
</style>
