<template>
  <!-- 首页列表 -->
  <div class="list">
    <div class="item" v-for="(item,index) in items" :key="index">
      <div class="item-tit">{{item.tit}}</div>
      <div class="item-msg">
        <div class="item-img">
          <img class="item-img-img" :src="item.img" alt />
        </div>
        <div class="item-lists">
          <div
            class="item-list"
            v-for="(item2,index2) in item.result"
            @click="routerTo(index,index2)"
            :key="index2"
          >
            <div class="item-list-img">
              <img :src="item2.kcimg" alt />
            </div>
            <div class="item-list-msg">
              <div>{{item2.kcname}}</div>
              <div>作者：{{item2.kcauthor}}</div>
              <div class="item-list-msg-jj">简介：{{item2.kcjj}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    items: { default: {} }
  },
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    routerTo(indexs, index) {
      let id = this.items[indexs].result[index].id;
      let tit = this.items[indexs].result[index].kcname;
      this.$emit("router", { _id: id, _tit: tit });
    }
  }
};
</script>
<style lang="css" scoped>
.list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.item {
  border-bottom: 1px solid white;
  margin-top: 30px;
  width: 100%;
}
.item-tit {
  line-height: 50px;
  font-weight: 600;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.item-msg {
  display: flex;
  height: 240px;
  display: flex;
  flex-direction: row;
}
.item-img {
  width: 15%;
  height: 240px;
  overflow: hidden;
}
.item-lists {
  width: 100%;
  height: 240px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
}
.item-list {
  width: 10%;
  height: 50%;
  margin-left: 50px;
}
.item-list-img {
  width: 100%;
  height: 50%;
}
.item-list-msg {
  background-color: rgb(61, 60, 58);
  color: #a09b9b;
  height: 50%;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  line-height: 10px;
  font-size: 10px;
}
.item-list-msg-jj {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
}
</style>

