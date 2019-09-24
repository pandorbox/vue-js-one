import Vue from "vue";
import Data from "./Data";
export default {
  data: {
    curId: 0,
    items: [], //始数据组
    nav: [
      {
        kcclass: "计算机类",
        kcicon: "http://127.0.0.1:3000/img/icon/jisuanji.png"
      },
      {
        kcclass: "文史类",
        kcicon: "http://127.0.0.1:3000/img/icon/lishi.png"
      },
      {
        kcclass: "经济类",
        kcicon: "http://127.0.0.1:3000/img/icon/jinji.png"
      },
      {
        kcclass: "英语类",
        kcicon: "http://127.0.0.1:3000/img/icon/yinyu.png"
      },
      { kcclass: "地理类", kcicon: "http://127.0.0.1:3000/img/icon/dili.png" }
    ]
  },
  async created() {
    this.data.items = await Data.getData();
  },
  methods: {
    async tab(index) {
      this.curId = index;
      let nav = this.nav;
      let res = await Data.getTabData({ index, nav });
      this.items = res;
    },
    async routerTo(index) {
      await this.$router.push({
        name: `study`,
        params: {
          id: this.items[index].id,
          tit: this.items[index].kcname
        }
      });
    }
  }
};
