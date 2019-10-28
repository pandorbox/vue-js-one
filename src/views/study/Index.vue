<template>
  <div class="page">
    <Header></Header>
    <div class="study container">
      <div class="study-tit">课程学习</div>
      <div class="study-msg" v-for="(item,index) in items.classDetail" :key="index">
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
      <div class="study-nav">
        <div
          class="nav-list"
          @click="tab(index)"
          v-for="(item,index) in nav"
          :class="{active : index===curId}"
          :key="index"
        >
          <div class="nav-list-name">{{item}}</div>
        </div>
      </div>
      <div v-if="curId == 0" class="nav-msg">
        <div class="nav-msg-list" v-for="(item, index) in items.classDetail" :key="index">
          <!-- 课程概述 -->
          <div class="nav-msg-list-tit">
            <!-- <div class="nav-msg-list-tit-logo">
                  <img src="http://127.0.0.1:3000/img/icon/icon1.png" alt="">
            </div>-->
            <div nav-msg-list-tit-logo-text>课程概述</div>
          </div>
          <div class="nav-msg-list-msg">{{item.kcjj}}</div>
          <!-- 课程目标 -->
          <div class="nav-msg-list-tit">
            <!-- <div class="nav-msg-list-tit-logo">
                  <img src="http://127.0.0.1:3000/img/icon/icon2.png" alt="">
            </div>-->
            <div nav-msg-list-tit-logo-text>课程目标</div>
          </div>
          <div class="nav-msg-list-msg">{{item.kcmb}}</div>
          <!-- 课程大纲 -->
          <!-- <div class="nav-msg-list-tit">
                <div class="nav-msg-list-tit-logo">
                  <img src="http://127.0.0.1:3000/img/icon/icon3.png" alt="">
                </div>
                <div nav-msg-list-tit-logo-text>课程大纲</div>
          </div>-->
        </div>
      </div>
      <div v-if="curId == 1" class="nav-msg">
        <div class="nav-usermsg-list" v-for="(item, index) in items.classPinjia" :key="index">
          <div class="nav-usermsg-list-img">
            <img :src="item.userimg" alt />
          </div>
          <div class="nav-usermsg-list-msg">
            <p>用户：{{item.username}}</p>
            <p>评论：{{item.kcpjmsg}}</p>
            <p>时间：{{item.pjtime}}</p>
          </div>
          <div class="zan">赞：{{item.zan}}</div>
        </div>
        <div class="addpj">
          <textarea class="addpjmsg" v-model="kcpjmsg" name id cols="100" rows="2"></textarea>
          <div class="btn btn-info" @click="addpj()">发表评论</div>
        </div>
      </div>
    </div>
    <Foote></Foote>
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
  methods: {
    ...Logic.methods
  },
  ...Logic.being
};
</script>
<style lang="css" scoped>
.study {
  border: 1px solid #ffffff;
  margin-top: 20px;
  padding-bottom: 40px;
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
.study-nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ffffff;
}
.nav-list {
  line-height: 40px;
  border: none;
  width: 10%;
  margin-right: 20px;
  text-align: center;
}
.nav-msg-list {
  width: 100%;
}

.nav-msg-list-tit {
  margin-top: 40px;
  width: 7%;
  border-bottom: 1px solid white;
  height: 40px;
  line-height: 40px;
  display: flex;
  opacity: 0.8;
  color: white;
  z-index: 10;
}
.nav-msg-list-tit-logo {
  width: 60px;
  height: 30px;
  margin-right: 20px;
}
.nav-msg-list-msg {
  padding-right: 10px;
  margin-top: 10px;
  width: 50%;
  line-height: 30px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.active {
  border-bottom: 2px solid red;
}
/* 评论样式 */
.nav-usermsg-list {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.nav-usermsg-list-img {
  width: 8%;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
}
.nav-usermsg-list-msg {
  width: 70%;
}
.addpj {
  width: 60%;
  margin-top: 50px;
}
.addpjmsg {
  padding: 20px 20px 20px 20px;
  background-color: rgb(175, 170, 170);
  line-height: 20px;
}
</style>
