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
  /**
   * 生命周期
   */
  being: {
    async beforeCreate() {}, // 组件实例刚被创建
    async created() {}, // 组件实例创建完成
    async beforeMount() {}, // 挂载前
    async mounted() {
      // 挂载后
      let route = this.$route.params;
      let name = this.$store.state.username;
      this.id = this.$route.params.id;
      this.items = await NData.getData({ _route: route, _username: name });
      if (this.items.isDinyue == 1) {
        this.isdy = true;
      } else {
        this.isdy = false;
      }
      console.log("data:", this.items);
    }
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
      }
    },
    async addpj(param) {
      var time = new Date();
      var yaear = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var pjtime = yaear + "-" + month + "-" + day;
      console.log(pjtime);
      console.log("id:", this.id);
      let res = await NData.addPingjia({
        _pjtime: pjtime,
        _userimg: this.items.userMsg[0].userimg,
        _kcpjmsg: param.msg,
        _username: this.items.userMsg[0].username,
        _kcid: this.id
      });
      await this.items.classPinjia.push(res[res.length - 1]);
      console.log("pj:", this.items.classPinjia);
    }
  }
};
