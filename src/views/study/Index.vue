<template>
  <div class="page">
    <Foote />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Foote from "@/components/Foote.vue";
import Test from "./_components/test.vue";
import Logic from "./Logic";
import Data from "./Data";
export default {
  components: { Header, Foote },
  name: "Kechen",
  data() {
    return {
      ...Logic.data,
      ...Data
    };
  },
  mounted() {
    Logic.mounted({ router: this.$route.params });
  },
  methods: {
    ...Logic.methods
  }
};
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
