<template>
  <div class="components"></div>
</template>
<script>
export default {
  props: {
    items: { default: {} }
  },
  name: "Test",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
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
