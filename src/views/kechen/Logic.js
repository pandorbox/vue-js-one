import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    curId: 0,
    items: [] //始数据组
  },
  async mounted() {
    this.data.items = await NData.getData();
    console.log("data:", this.data.items);
  },
  methods: {
    async tab(index) {
      this.curId = index;
      let nav = Data.nav;
      let res = await NData.getTabData({ index, nav });
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
