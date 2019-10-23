<template>
  <!-- 首页列表 -->
  <div class="list">
    <div class="item" v-for="(item,index) in items" :key="index">
      <div class="item-tit">{{item.tit}}</div>
      <div class="item-msg">
        <div class="item-logoimg">
          <img :src="item.img" alt />
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
              <div>{{item2.kcjj}}</div>
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
    return {
      tit: [],
      img: []
    };
  },
  mounted: function() {
    // 获取首页列表栏
    // this.$http.get('http://127.0.0.1:3000/kclistone').then((res)=>{
    //       this.items.push(res.data.result);
    //       this.tit.push(res.data.tit);
    //       this.img.push(res.data.img);
    //     }).catch((err)=>{
    //         alert(err);
    //     });
    //   this.$http.get('http://127.0.0.1:3000/kclisttwo').then((res)=>{
    //       this.items.push(res.data.result);
    //       this.tit.push(res.data.tit);
    //       this.img.push(res.data.img);
    //     }).catch((err)=>{
    //         alert(err);
    //     });
    //   this.$http.get('http://127.0.0.1:3000/kclistthr').then((res)=>{
    //       this.items.push(res.data.result);
    //       this.tit.push(res.data.tit);
    //       this.img.push(res.data.img);
    //     }).catch((err)=>{
    //         alert(err);
    //     });
    //   this.$http.get('http://127.0.0.1:3000/kclistfou').then((res)=>{
    //       this.items.push(res.data.result);
    //       this.tit.push(res.data.tit);
    //       this.img.push(res.data.img);
    //     }).catch((err)=>{
    //         alert(err);
    //     });
    //   console.log(this.items)
    //   console.log(this.tit);
  },
  methods: {
    routerTo(indexs, index) {
      console.log(indexs, index);
      console.log(this.items[indexs][index]);
      this.$router.push({
        name: `study`,
        params: {
          id: this.items[indexs][index].id,
          tit: this.items[indexs][index].kcname
        }
      });
    }
  }
};
</script>
<style>
.list {
  padding-bottom: 30px;
}
.item {
  border-bottom: 1px solid white;
  margin-top: 30px;
  height: 240px;
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
  height: 200px;
}
.item-logoimg {
  width: 10%;
  height: 100%;
}
.item-lists {
  width: 100%;
  height: 50%;
  display: flex;
  overflow: hidden;
}
.item-list {
  border: 1px solid white;
  width: 10%;
  margin-left: 50px;
}
.item-list-img {
  width: 100%;
  height: 40%;
}
.item-list-img img {
  width: 100%;
  height: 100%;
}
.item-list-msg {
  height: 60%;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  line-height: 10px;
  font-size: 10px;
}
.item-list-msg > div {
  height: 33.3%;
}
.item-list-msg div:first-child {
  text-align: center;
}
.item-list-msg div:last-child {
  word-wrap: none;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

