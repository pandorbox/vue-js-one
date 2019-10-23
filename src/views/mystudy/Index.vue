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
      <div class="user-msg" v-for="(item,index) in usermsg" :key="index">
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
        <div class="nav3-msg-list" v-for="(item, index) in mykecheng" :key="index">
          <div class="nav3-msg-list-img">
            <img src="@/assets/img/img.jpg" alt />
          </div>
          <div class="nav3-msg-list-msg">
            <p>课程名称：{{item.kcname}}</p>
            <p>课程简介：{{item.kcjianjie}}</p>
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
        <div class="nav3-msg-list" v-for="(item, index) in mydinyue" :key="index">
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
        <div class="nav3-msg-list" v-for="(item, index) in myguanzhu" :key="index">
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
        <div class="nav3-nootbook" v-for="(item, index) in bjturn" :key="index">
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

export default {
  components: {
    Header,
    Foote
  },
  data() {
    return {
      thistc: false,
      bjtit: "",
      bjmsg: "",
      bjturn: [],
      usermsg: [1],
      id: "",
      tit: "",
      curId: 0,
      myguanzhu: [],
      mydinyue: [],
      kcdetail: [],
      nav: ["未学完课程", "已学完课程", "我的订阅", "我的关注", "我的读书笔记"],
      mykecheng: []
    };
  },
  created() {
    this.getRouterData();
  },

  mounted: function() {
    //获取我的信息
    console.log("username", this.$store.state.username);
    this.$http
      .post(
        "http://127.0.0.1:3000/demo/mymsg",
        `username=${this.$store.state.username}`
      )
      .then(res => {
        console.log(res);
        if (res.data.code) {
          console.log(res);
          this.usermsg = [1];
        } else {
          this.usermsg = res.data;
        }
      })
      .catch(err => {
        alert(err);
      });
    // 获取个人笔记
    this.$http
      .post(
        "http://127.0.0.1:3000/demo/mybj",
        `username=${this.$store.state.username}`
      )
      .then(res => {
        console.log("个人笔记", res);
        if (res.data.code) {
          this.bjturn = [];
        } else {
          this.bjturn = res.data;
        }
      })
      .catch(err => {
        alert(err);
      });
    // 获取关注列表
    this.$http
      .post(
        "http://127.0.0.1:3000/demo/myguanzhu",
        `username=${this.$store.state.username}`
      )
      .then(res => {
        var kclist = res.data;
        for (var i = 0; i < kclist.length; i++) {
          let kcid = kclist[i].id;
          this.$http
            .post("http://127.0.0.1:3000/thiskclistdetail", `id=${kcid}`)
            .then(res => {
              this.myguanzhu.push(res.data[0]);
              console.log("我的关注", this.myguanzhu);
            });
        }
      })
      .catch(err => {
        alert(err);
      });
    // 获取订阅列表
    this.$http
      .post(
        "http://127.0.0.1:3000/demo/mydinyue",
        `username=${this.$store.state.username}`
      )
      .then(res => {
        var kclist = res.data;
        for (var i = 0; i < kclist.length; i++) {
          let kcid = kclist[i].id;
          this.$http
            .post("http://127.0.0.1:3000/thiskclistdetail", `id=${kcid}`)
            .then(res => {
              this.mydinyue.push(res.data[0]);
              console.log("我的订阅", this.mydinyue);
            });
        }
      })
      .catch(err => {
        alert(err);
      });

    console.log(this.id, this.tit);
    this.$http
      .post(
        "http://127.0.0.1:3000/thiskclistdetail",
        `kcclass=${this.tit}&id=${this.id}`
      )
      .then(res => {
        this.kcdetail = res.data;
        console.log(this.kcdetail);
      })
      .catch(err => {
        alert(err);
      });
  },
  methods: {
    tab(index) {
      this.curId = index;
    },
    getRouterData() {
      this.id = this.$route.params.id;
      this.tit = this.$route.params.tit;
    },
    istc() {
      this.thistc = true;
    },
    notc(index) {
      this.thistc = false;
    },
    // 添加笔记
    adduserbj() {
      var time = new Date();
      var yaear = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var bjtime = yaear + "-" + month + "-" + day;
      console.log(this.$store.state.username);
      this.$http
        .post(
          "http://127.0.0.1:3000/demo/addmybj",
          `bjtime=${bjtime}&username=${this.$store.state.username}&bjtit=${this.bjtit}&bjmsg=${this.bjmsg}`
        )
        .then(res => {
          console.log(res);
          this.bjturn = res.data;
          this.thistc = false;
        })
        .catch(err => {
          alert(err);
        });
    }
  }
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
