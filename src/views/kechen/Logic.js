import Vue from "vue";
import Data from "./Data";
import NData from "./NData";
export default {
  data: {
    curId: 0,
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
      this.items = await NData.getData();
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
  },
};
