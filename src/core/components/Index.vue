<template>
  <div class="components">
    <Test />
  </div>
</template>
<script>
import Test from "./_components/test.vue";
import Logic from "./Logic";
import Data from "./Data";
export default {
  components: { Test },
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
  align-items: center;
  width: 100%;
}
</style>
