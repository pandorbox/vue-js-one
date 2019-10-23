<template>
  <div class="container components">
    <Banner />
    <List />
  </div>
</template>
<script>
// @ is an alias to /src
import Banner from "./_comp/Banner.vue";
import List from "./_comp/List.vue";

export default {
  components: {
    Banner,
    List
  },
  data() {
    return {
      banner: [],
      a: "123"
    };
  }
};
</script>

<style>
</style>
