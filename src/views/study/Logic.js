import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [], //始数据组
    isdy: false,
    isaduio: false,
    id: 0,
    tit: "",
    curId: 0,
    kcpjmsg: "",
    userimg: "",
    userjf: 0,
    nav: ["课程详情", "课程评价"],
    pinjia: []
  },
  async mounted(param) {
    console.log(param);
    this.id = param.route.id;
    this.data.items = await NData.getData({ _route: param.route, _username: param.username });
    if (this.data.items.isDinyue == 1) {
      this.isdy = true;
    } else {
      this.isdy = false;
    }
    console.log("data:", this.data.items);
  },
  methods: {
    async onClick(param) {},
    tab(index) {
      this.curId = index;
    },
    async guanzhu(item) {
      if (!this.$store.state.islogin) {
        alert("请先登录！");
        this.$router.push({
          path: `login`
        });
        return;
      }
      let res = await NData.addGuanzhu({ _username: this.$store.state.username, _kcid: this.id });
      alert(res.msg);
    },
    async dinyue(item) {
      if (!this.$store.state.islogin) {
        alert("请先登录！");
        this.$router.push({
          path: `login`
        });
        return;
      }
      let havejf = Number(this.items.userMsg[0].userjf);
      let needjf = Number(this.items.classDetail[0].kcjf);
      if (havejf < needjf) {
        alert("积分不足！");
        return;
      } else {
        var userjf = this.items.userMsg[0].userjf - this.items.classDetail[0].kcjf;
        let res = await NData.addDinyue({ _username: this.$store.state.username, _kcid: this.id, _userjf: userjf });
        this.isdy = true;
        console.log(this.isdy);
        console.log(res);
        // this.$http
        //   .post(
        //     "http://127.0.0.1:3000/demo/addmydinyue",
        //     `username=${this.$store.state.username}&kcid=${this.id}&userjf=${userjf}`
        //   )
        //   .then(res => {
        //     if (res.data.code == 200) {
        //       this.isdy = false;
        //       alert(res.data.msg);
        //     }
        //   })
        //   .catch(err => {
        //     alert(err);
        //   });
      }
    }
  }
};
