import Vue from "vue";
import Data from "./BaseData";
export default {
  /** 数据 */
  data: {
    items: [] //始数据组
  },
  /** 页面加载时 */
  async created() {
    this.data.items = await Data.getData();
  },

  /** 事件 */
  methods: {
    async onClick(param) {}
  }
};
