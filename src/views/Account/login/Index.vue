<template>
  <div class="page">
    <Header />
    <Form @login="login" />
    <Foote class="foot" />
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
.page {
  height: 100%;
  background: url(./img/bg.png) no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
}
.foot {
  position: absolute;
  bottom: 0px;
}
</style>
