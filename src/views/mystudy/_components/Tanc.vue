<template>
  <div class="components">
    <div v-if="thistc" class="mc"></div>
    <div v-if="thistc" class="tc">
      <div class="tc-box">
        <div class="tc-row">
          <div class="tc-tit">笔记标题：</div>
          <div class="tc-input">
            <input type="text" v-model="bjtit" />
          </div>
        </div>
        <div class="tc-row">
          <div class="tc-tit">笔记内容：</div>
          <div class="tc-input">
            <textarea name id cols="30" rows="3" v-model="bjmsg"></textarea>
          </div>
        </div>
        <div class="tc-row tc-btn">
          <div class="btn btn-success" @click="adduserbj()">确认</div>
          <div class="btn btn-danger" @click="closeTanc()">取消</div>
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
      bjtit: "",
      bjmsg: ""
    };
  },
  mounted() {},
  methods: {
    adduserbj() {
      this.$emit("addNoteBook", { tit: this.bjtit, msg: this.bjmsg });
    },
    closeTanc() {
      this.$emit("closeTanc", {});
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
  background-color: #ccc;
  top: 300px;
  left: 600px;
  width: 30%;
  height: 200px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999999;
}
.tc-row {
  margin-top: 20px;
  display: flex;
}
.tc-btn {
  justify-content: space-around;
}
</style>
