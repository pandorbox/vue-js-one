<template>
  <div class="page">
    <Header />
    <Form @login="login" />
    <Foote />
  </div>
</template>
<script>
import Form from "./_components/test.vue";
import Logic from "./Logic";
import Data from "./Data";
import Header from "@/components/Headerlogin.vue";
import Foote from "@/components/Foote.vue";
export default {
  components: { Form, Header, Foote },
  name: "Kechen",
  data() {
    return {
      ...Logic.data,
      ...Data
    };
  },
  mounted() {
    this.$store.state.islogin = false;
    this.$store.state.username = "";
    Logic.mounted();
  },
  methods: {
    ...Logic.methods
  }
};
</script>
<style lang="css" scoped>
.page{
  display: flex;
  flex-direction: column;
}
</style>
