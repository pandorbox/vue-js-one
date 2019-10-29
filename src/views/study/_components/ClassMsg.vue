<template>
  <div class="components">
    <div class="study-tit">课程学习</div>
    <div class="study-msg" v-for="(item,index) in items" :key="index">
      <div class="study-msg-img">
        <img :src="item.kcimg" alt />
      </div>
      <div class="study-msg-text">
        <p></p>
        <p>作者：{{item.kcauthor}}</p>
        <p>简介：{{item.kcjj}}</p>
        <p>所需积分：{{item.kcjf}}</p>
        <div v-if="isdy" class="audio">
          <audio :src="item.kcaudio" @play="ready" @pause="pause" controls></audio>
        </div>
        <div v-if="!isdy" class="audio">
          <div style="color:red;">学习前请先订阅!</div>
        </div>
      </div>
      <div class="guanzhu">
        <button class="btn btn-info" v-if="!isdy" @click="guanzhu(item)">关注</button>
        <button class="btn btn-info" v-if="!isdy" @click="dinyue(item)">订阅</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { default: {} },
    isdy: { default: false }
  },
  name: "Test",
  data() {
    return {};
  },
  methods: {
    guanzhu(item) {
      this.$emit("guanzhu", item);
    },
    dinyue(item) {
      this.$emit("dinyue", item);
    }
  }
};
</script>
<style lang="css" scoped>
.components {
  width: 100%;
}
.study-tit {
  width: 10%;
  line-height: 50px;
  font-size: 15px;
}
.study-msg {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 20px;
}
.study-msg > div {
  margin-left: 20px;
}
.study-msg-img {
  width: 30%;
  height: 200px;
  position: relative;
}
.audio {
  margin-top: 40px;
  height: 40px;
  width: 80%;
}
audio {
  width: 100%;
  height: 100%;
  outline: medium;
}
.study-msg-text {
  width: 50%;
}
</style>
