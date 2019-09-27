<template>
  <div class="kechen page container">
    <div class="pathtit"></div>
    <div class="nav">
      <div class="nav1-list" @click="tab(index)" v-for="(item,index) in nav" :key="index">
        <div class="nav1-list-img">
          <img :src="item.kcicon" alt srcset />
        </div>
        <div :class="{active : index===curId}" class="nav1-list-name">{{item.kcclass}}</div>
      </div>
    </div>
    <div class="nav1-msg">
      <div
        class="nav1-msg-list"
        v-for="(item, index) in items"
        @click="routerTo(index)"
        :key="index"
      >
        <div class="nav1-msg-list-img">
          <img :src="item.kcimg" alt />
        </div>
        <div class="nav1-msg-list-msg">
          <div class="nav1-msg-list-msg-one">
            <div>{{item.kcname}}</div>
            <div>作者：{{item.kcauthor}}</div>
          </div>
          <div class="nav1-msg-list-msg-two">简介：{{item.kcjj}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import Logic from "./Logic";
import Data from "./Data";
export default {
  name: "Kechen",
  data() {
    return {
      ...Logic.data,
      ...Data
    };
  },
  mounted() {
    Logic.mounted();
  },
  methods: {
    ...Logic.methods
  }
};
</script>
<style lang="css" scoped>
.kechen {
  border: 1px solid #ccc;
  padding-bottom: 300px;
}
.pathtit {
  width: 20%;
  font-size: 15px;
  text-align: left;
}
.pathtit p {
  margin-left: 30px !important;
}
.nav {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
}
.nav1-list {
  margin-right: 40px;
  width: 13%;
  height: 40px;
  display: flex;
}
.router-link {
  width: 100%;
  height: 100%;
  display: flex;
}
.nav1-list-img {
  width: 20%;
  height: 80%;
}
.nav1-list-name {
  width: 50%;
  text-align: center;
  line-height: 40px;
  margin-left: 10%;
  color: white;
}
.active {
  border-bottom: 1px solid red;
  color: red;
}
.nav1-msg {
  width: 100%;
}
.nav1-msg-list {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px #ccc;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.nav1-msg-list-img {
  width: 50%;
  height: 100%;
}
.nav1-msg-list-img img {
  width: 100%;
  height: 100%;
}
.nav1-msg-list-msg {
  height: 100%;
  width: 50%;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
}
.nav1-msg-list-msg-one {
  height: 50%;
  display: flex;
  flex-direction: column;
}
.nav1-msg-list-msg-two {
  height: 50%;
  width: 100%;
  line-height: 15px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
</style>
