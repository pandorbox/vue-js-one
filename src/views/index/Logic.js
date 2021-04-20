import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
import { create } from "domain";
export default {
/**
  * data 数据
  */
  data: {
    items: [] //始数据组
  },
/**
 * 生命周期
 */
  being: {
    async beforeCreate(){}, // 组件实例刚被创建
    async created(){}, // 组件实例创建完成 
    async beforeMount() {  // 挂载前
    },
    async mounted() { // 挂载后
       let res = await NData.getData();
      this.items = res
      console.log("data:", this.items);
    },
    async beforeUpdate(){ // 组件更新前

    },
    async updated(){ // 组件更新后

    }
  },
/**
  * 事件处理
  */
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
};
