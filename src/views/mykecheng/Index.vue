<template>
  <div class="page container">
    <!-- <div v-if="thistc" class="mc"></div>
    <div v-if="thistc" class="tc">
      <div class="tc-box">
        <div class="tc-row">
          <div class="tc-tit">昵称：</div>
          <div class="tc-input">
            <input type="text" v-model="usernc" />
          </div>
        </div>
        <div class="tc-row">
          <div class="tc-tit">简介：</div>
          <div class="tc-input">
            <textarea name id cols="30" rows="3" v-model="userjj"></textarea>
          </div>
        </div>
        <div class="tc-row tc-btn">
          <div class="btn btn-success" @click="addusermsg()">确认</div>
          <div class="btn btn-danger" @click="notc(index)">取消</div>
        </div>
      </div>
    </div> -->
    <Tanc v-if="thistc" :thistc="thistc" @changeMsg="changeMsg" @close="closeTanc" :userNc="userNc" :userJs="userJs" />
    <UserMsg :items="items.userMsg" @openTanc="openTanc" @upPhoto="upPhoto" />
    <Tab :nav="nav" @tab="tab" :tabIndex="tabIndex" />
    <ClasList v-if="tabIndex == 0" :items="items.myKecheng" />
    <div class="user">
      <!-- <div class="user-msg" v-for="(item, index) in items.userMsg" :key="index">
        <div class="user-msg-img">
          <img :src="item.userimg" alt />
        </div>
        <div class="user-msg-text">
          <p></p>
          <p>昵称：{{ item.usernc }}</p>
          <p>简介：{{ item.userjj }}</p>
        </div>
        <div class="user-msg-xg">
          <div class="btn btn-success" @click="istc(index)">修改资料</div>
          <form action class="userimg">
            <div class="userimgbtn">上传头像</div>
            <input type="file" multiple id="userinputFile" @change="userimg()" name="userimg" />
          </form>
        </div>
      </div> -->
      <!-- <div class="user-nav">
      <div
          class="nav2-list"
          @click="tab(index)"
          v-for="(item, index) in nav"
          :class="{ active: index === curId }"
          :key="index"
        >
          <div :class="{ active: index === curId }" class="nav2-list-name">{{ item }}</div>
        </div>
      </div> -->
      <!-- <div v-if="tabIndex == 0" class="nav2-msg">
        <div class="nav2-msg-list" v-for="(item, index) in items.myKecheng" :key="index">
          <div class="nav2-msg-list-img">
            <img :src="item.kcimg" alt />
          </div>
          <div class="nav2-msg-list-msg">
            <p>课程名称：{{ item.kcname }}</p>
            <p>课程简介：{{ item.kcjj }}</p>
            <p>发布时间：{{ item.time }}</p>
            <p>收藏次数：{{ item.shoucang }}</p>
            <p>订阅人数：{{ item.dingyue }}</p>
            <p>课程状态：{{ item.isshow == "false" ? "审核中" : "已发布" }}</p>
          </div>
        </div>
      </div> -->
      <div v-if="tabIndex == 1" class="addkecheng">
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
      <div v-if="tabIndex == 2" class="nav2-msg">
        <div class="nav2-usermsg-list" v-for="(item, index) in pinjia" :key="index"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Logic from "./Logic";
import Data from "./Data";
import Tanc from "./_components/Tanc.vue";
import UserMsg from "./_components/UserMsg.vue";
import Tab from "./_components/Tab.vue";
import ClasList from "./_components/ClassList";

export default {
  components: { Tanc, UserMsg, Tab, ClasList },
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
.page {
  border: 1px solid #ffffff;
  padding-bottom: 200px;
  height: 100%;
}

.user-nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
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
