<template>
  <div class="components container">
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
          <div class="btn btn-danger" @click="notc(index)">取消</div>
        </div>
      </div>
    </div>
    <div class="user">
      <div class="user-msg" v-for="(item,index) in items.userMsg" :key="index">
        <div class="user-msg-img">
          <img :src="item.userimg" alt />
        </div>
        <div class="user-msg-text">
          <p>用户名:{{item.username}}</p>
          <p>简介：{{item.userjj}}</p>
          <p>积分：&nbsp;&nbsp;{{item.userjf}}</p>
        </div>
      </div>
      <div class="user-nav">
        <div
          class="nav3-list"
          @click="tab(index)"
          v-for="(item,index) in nav"
          :class="{active : index===curId}"
          :key="index"
        >
          <div class="nav3-list-name">{{item}}</div>
        </div>
      </div>
      <div v-if="curId == 0" class="nav3-msg">
        <div class="nav3-msg-list" v-for="(item, index) in items.myKecheng" :key="index">
          <div class="nav3-msg-list-img">
            <img :src="item.kcimg" alt />
          </div>
          <div class="nav3-msg-list-msg">
            <p>课程名称：{{item.kcname}}</p>
            <p>课程简介：{{item.kcjj}}</p>
            <p>学习进度：{{item.time}}</p>
            <p>学习时间：{{item.shoucang}}</p>
          </div>
        </div>
      </div>
      <div v-if="curId == 1" class="addkecheng">
        <div class="nav3-msg-list" v-for="(item, index) in mykecheng" :key="index">
          <div class="nav3-msg-list-img">
            <img src="@/assets/img/img.jpg" alt />
          </div>
          <div class="nav3-msg-list-msg">
            <p>课程名称：{{item.kcname}}</p>
            <p>课程简介：{{item.kcjianjie}}</p>
            <button class="btn btn-success">已学完</button>
          </div>
        </div>
      </div>
      <div v-if="curId == 2" class="nav3-msg">
        <div class="nav3-msg-list" v-for="(item, index) in items.dingyue" :key="index">
          <div class="nav3-msg-list-img">
            <img :src="item.kcimg" alt />
          </div>
          <div class="nav3-msg-list-msg">
            <p>课程名称：{{item.kcname}}</p>
            <p>课程简介：{{item.kcjj}}</p>
            <button class="btn btn-danger">取消订阅</button>
          </div>
        </div>
      </div>
      <div v-if="curId == 3" class="nav3-msg">
        <div class="nav3-msg-list" v-for="(item, index) in items.guanzhu" :key="index">
          <div class="nav3-msg-list-img">
            <img :src="item.kcimg" alt />
          </div>
          <div class="nav3-msg-list-msg">
            <p>课程名称：{{item.kcname}}</p>
            <p>课程简介：{{item.kcjj}}</p>
            <button class="btn btn-danger">取消关注</button>
          </div>
        </div>
      </div>
      <div v-if="curId == 4" class="nav3-msg">
        <div class="add-nootbook">
          <button class="btn btn-info" @click="istc()">+新增读书笔记</button>
        </div>
        <div class="nav3-nootbook" v-for="(item, index) in items.noteBook" :key="index">
          <div class="nootbook-tit">{{item.bjtit}}</div>
          <div class="nootbook-msg">{{item.bjmsg}}</div>
          <div class="nootbook-time">{{item.bjtime}}</div>
        </div>
      </div>
    </div>
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
.components {
  border: 1px solid #ccc;
  padding-bottom: 200px;
}
.mc {
  width: 100%;
  height: 1000px;
  background-color: #ccc;
  opacity: 0.8;
  position: fixed;
  top: -150px;
  left: 0px;
}
.tc {
  border: 1px solid white;
  margin-left: 400px;
  width: 30%;
  height: 200px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tc-row {
  margin-top: 20px;
  display: flex;
}
.tc-btn {
  justify-content: space-around;
}
.active {
  border-bottom: 2px solid red !important;
}
.user {
  margin-top: 20px;
}
.user-tit {
  width: 10%;
  line-height: 50px;
  font-size: 15px;
}
.user-msg {
  padding-top: 20px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.user-msg > div {
  margin-left: 20px;
}
.user-msg-img {
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
}
.user-msg-text {
  width: 50%;
}
.user-nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.nav3-list {
  line-height: 40px;
  border: none;
  width: 10%;
  margin-right: 20px;
  text-align: center;
}
.nav3-msg {
  padding-bottom: 20px;
  width: 100%;
}
.nav3-msg-list {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 200px;
  display: flex;
}
.nav3-msg-list-img {
  width: 20%;
  height: 100%;
  margin-right: 40px;
}
.nav3-msg-list-msg {
  height: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.nav3-msg-list-msg button {
  width: 150px;
}
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
  color: #ccc;
  margin-left: 10px;
}
.submit {
  width: 100%;
  padding-left: 200px;
}
/* 读书笔记 */
.add-nootbook {
  width: 100%;
  padding-left: 40%;
  line-height: 80px;
}
.add-nootbook button {
  height: 30px;
}
.nootbook-tit {
  margin-top: 30px;
  line-height: 40px;
  font-weight: 600;
}
.nootbook-msg {
  padding-left: 20px;
  width: 80%;
  border: 1px solid #ccc;
  border-bottom: none;
  line-height: 30px;
  text-decoration: black;
}
.nootbook-time {
  width: 80%;
  border: 1px solid #ccc;
  border-top: none;
  text-align: right;
  padding-right: 20px;
}
</style>
