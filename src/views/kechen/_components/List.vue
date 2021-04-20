<template>
  <div class="components">
    <div class="nav1-msg">
      <div class="nav1-msg-list" v-for="(item, index) in items" @click="onItem(index)" :key="index">
        <div class="nav1-msg-list-img">
          <img :src="item.kcimg" alt />
        </div>
        <div class="nav1-msg-list-msg">
          <div class="nav1-msg-list-msg-one">
            <div>{{ item.kcname }}</div>
            <div>作者：{{ item.kcauthor }}</div>
          </div>
          <div class="nav1-msg-list-msg-two">简介：{{ item.kcjj }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { default: [] }
  },
  name: "Test",
  data() {
    return {};
  },
  methods: {
    onItem(index) {
      this.$emit("item", index);
    }
  }
};
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.nav1-msg {
  width: 100%;
}
.nav1-msg-list {
  border: 1px solid #ccc;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.nav1-msg-list-img {
  width: 50%;
  height: 100%;
}
.nav1-msg-list-img img {
  width: 100%;
  height: 100%;
}
.nav1-msg-list-msg {
  height: 100%;
  width: 50%;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.nav1-msg-list-msg-one {
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav1-msg-list-msg-two {
  width: 100%;
  line-height: 15px;
	overflow: hidden;
	display:-webkit-box;
  	-webkit-box-orient:vertical;
  	-webkit-line-clamp:4;
  	text-overflow: ellipsis;
}
</style>
