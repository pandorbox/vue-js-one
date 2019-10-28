import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    items: [] //始数据组
  },
/**
 * 生命周期
 */
  being: {
    async beforeCreate(){}, // 组件实例刚被创建
    async created(){}, // 组件实例创建完成 
    async mounted() { // 挂载后
      this.items = await NData.getData({ username: name });
      console.log("data:", this.items);
    },
  },
  methods: {
    async onClick(param) {}
  }
};
