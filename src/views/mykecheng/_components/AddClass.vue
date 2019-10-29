<template>
  <div class="components addkecheng">
    <form action>
      <div class="zuozhe">
        <div class="add-tit">作者：</div>
        <input
          class="input-lang"
          type="text"
          disabled="true"
          :value="this.$store.state.username"
          name="kcauthor"
          id="inputkcauthor"
        />
      </div>
      <div class="kechenclass">
        <div class="add-tit">课程类型：</div>
        <select name="kcckass" id="inputkcclass">
          <option>计算机类</option>
          <option>文史类</option>
          <option>经济类</option>
          <option>英语类</option>
          <option>化学类</option>
        </select>
      </div>
      <div class="kechengname">
        <div class="add-tit">课程名：</div>
        <input class="input-lang" type="text" name="kcname" id="inputkcname" />
      </div>

      <div class="kechengjifen">
        <div class="add-tit">所需积分：</div>
        <input class="input-short" type="number" name="kcjf" id="inputkcjf" />
      </div>
      <div class="kechengzj">
        <div class="add-tit">课程音频：</div>
        <input type="file" @change="kcaudio()" multiple id="audioinputFile" name="kcaudio" />
      </div>
      <div class="kechengimg">
        <div class="add-tit">课程封面图：</div>
        <input type="file" multiple id="imginputFile" name="kcimg" />
      </div>
      <div class="kechengjianjie">
        <div class="add-tit">课程简介：</div>
        <textarea name="kcjj" id="inputkcjj" cols="30" rows="5"></textarea>
      </div>
      <div class="kechengkaishu">
        <div class="add-tit">课程概述：</div>
        <textarea name="kcgs" id="inputkcgs" cols="30" rows="5" v-model="kcgs"></textarea>
      </div>
      <input type="button" value="提交" class="btn addkc btn-info" @click="addlist()" />
    </form>
  </div>
</template>
<script>
export default {
  props: {},
  name: "Test",
  data() {
    return {
      kcgs: ""
    };
  },
  mounted() {},
  methods: {
    kcaudio() {
      this.$emit("kcaudio", {});
    },
    addlist() {
      this.$emit("addlist", {});
    }
  }
};
</script>
<style lang="css" scoped>
.addkecheng {
  padding-bottom: 40px;
}
form > div {
  margin-top: 20px;
  width: 100%;
  display: flex;
}
.add-tit {
  width: 10%;
  text-align: right;
  margin-right: 20px;
}
.input-short {
  width: 70px;
  border: none !important;
  border-bottom: 2px solid black !important;
  outline: medium;
  text-align: center;
}
.input-lang {
  width: 150px;
  border: none !important;
  border-bottom: 2px solid black !important;
  outline: medium;
}
.input-lizi {
  color: rgb(224, 221, 221);
  margin-left: 10px;
}
.submit {
  width: 100%;
  padding-left: 200px;
}
.addkc {
  margin-left: 200px;
  margin-top: 30px;
}
</style>
