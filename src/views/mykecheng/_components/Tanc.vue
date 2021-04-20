<template>
  <div class="components">
    <div v-if="thistc" class="mc"></div>
    <div v-if="thistc" class="tc">
      <div class="tc-box">
        <div class="tc-row">
          <div class="tc-tit">昵称：</div>
          <div class="tc-input">
            <input type="text" v-model="userNc" />
          </div>
        </div>
        <div class="tc-row">
          <div class="tc-tit">简介：</div>
          <div class="tc-input">
            <textarea name id cols="30" rows="3" v-model="userJs"></textarea>
          </div>
        </div>
        <div class="tc-row tc-btn">
          <div class="btn btn-success" @click="changeMsg()">确认</div>
          <div class="btn btn-danger" @click="close()">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    thistc: { default: false }
  },
  name: "Test",
  data() {
    return {
      userNc: "",
      userJs: ""
    };
  },
  methods: {
    changeMsg() {
      this.$emit("changeMsg", { userNc: this.userNc, userJs: this.userJs });
    },
    close() {
      this.$emit("close", {});
    }
  }
};
</script>
<style lang="css" scoped>
.components {
  position: absolute;
}
.mc {
  width: 100%;
  height: 1000px;
  background-color: #ccc;
  opacity: 0.8;
  position: fixed;
  top: -150px;
  left: 0px;
  z-index: 9999;
}
.tc {
  border: 1px solid white;
  margin-left: 300px;
  width: 500px;
  height: 200px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99999;
  background-color: #ccc;
}
.tc-row {
  margin-top: 20px;
  display: flex;
}
.tc-btn {
  justify-content: space-around;
}
.active {
  color: red !important;
  border-bottom: 1px solid red !important;
}
</style>
