import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [] //始数据组
  },
  async mounted() {
    this.data.items = await NData.getData();
    console.log("data:", this.data.items);
  },
  methods: {
    async onClick(param) {}
  }
};
