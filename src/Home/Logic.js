import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [], //始数据组
    nav: [{ name: "首页" }, { name: "课程" }, { name: "公告" }, { name: "我的课程" }, { name: "我的学习" }],
    topNavNum: 0,
    index: false
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
      var thispath = this.$route.path;
      if (thispath == "/index") {
        this.topNavNum = 0;
      } else if (thispath == "/kechen") {
        this.topNavNum = 1;
      } else if (thispath == "/notic") {
        this.topNavNum = 2;
      } else if (thispath == "/mykecheng") {
        this.topNavNum = 3;
      } else if (thispath == "/mystudy") {
        this.topNavNum = 4;
      }
      // this.items = await NData.getData({ username: name });
      // console.log("data:", this.items);
    }
  },
  /**
   * 事件处理
   */
  methods: {
    async onClick(param) {},
    onTopNav(index) {
      this.topNavNum = index;
      if (index == 0) {
        this.$router.push({
          path: `index`
        });
      } else if (index == 1) {
        this.$router.push({
          path: `kechen`
        });
      } else if (index == 2) {
        this.$router.push({
          path: `notic`
        });
      } else if (index == 3) {
        if (!this.$store.state.islogin) {
          alert("请先登录！");
          this.$router.push({
            path: `login`
          });
          return;
        }
        this.$router.push({
          path: `mykecheng`
        });
      } else if (index == 4) {
        if (!this.$store.state.islogin) {
          alert("请先登录！");
          this.$router.push({
            path: `login`
          });
          return;
        }
        this.$router.push({
          path: `mystudy`
        });
      }
    }
  }
};
