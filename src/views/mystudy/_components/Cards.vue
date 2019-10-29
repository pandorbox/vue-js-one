<template>
  <div class="components">
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
      <div class="nav3-msg-list" v-for="(item, index) in items.mykecheng" :key="index">
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
  </div>
</template>
<script>
export default {
  props: {
    items: { default: {} },
    curId: { default: 0 }
  },
  name: "Test",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="css" scoped>
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
</style>
