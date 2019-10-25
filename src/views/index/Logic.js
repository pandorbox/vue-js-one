import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [] //始数据组
  },
  event: {
    async getData() {
      this.items = await NData.getData();
      console.log("data:", this.items);
    }
  },
  methods: {
    async routerTo(param) {
      this.$router.push({
        name: `study`,
        params: {
          id: param._id,
          tit: param._tit
        }
      });
    }
  },
  being: {
    async beforeMount() {
      await this.getData();
    },
    async mounted() {
      await this.getData();
    }
  }
};
