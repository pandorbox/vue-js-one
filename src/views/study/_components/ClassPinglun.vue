<template>
  <div class="components">
    <div class="nav-msg">
      <div class="nav-usermsg-list" v-for="(item, index) in items" :key="index">
        <div class="nav-usermsg-list-img">
          <img :src="item.userimg" alt />
        </div>
        <div class="nav-usermsg-list-msg">
          <p>用户：{{item.username}}</p>
          <p>评论：{{item.kcpjmsg}}</p>
          <p>时间：{{item.pjtime}}</p>
        </div>
        <div class="zan">赞：{{item.zan}}</div>
      </div>
      <div class="addpj">
        <textarea class="addpjmsg" v-model="kcpjmsg" name id cols="100" rows="2"></textarea>
        <div class="btn btn-info" @click="addpj()">发表评论</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { default: {} }
  },
  name: "Test",
  data() {
    return {
      kcpjmsg: ""
    };
  },
  mounted() {},
  methods: {
    addpj() {
      this.$emit("addpj", { msg: this.kcpjmsg });
    }
  }
};
</script>
<style lang="css" scoped>
/* 评论样式 */
.nav-usermsg-list {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.nav-usermsg-list-img {
  width: 8%;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
}
.nav-usermsg-list-msg {
  width: 70%;
}
.addpj {
  width: 60%;
  margin-top: 50px;
}
.addpjmsg {
  padding: 20px 20px 20px 20px;
  background-color: rgb(175, 170, 170);
  line-height: 20px;
}
</style>
