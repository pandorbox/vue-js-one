<template>
<!--公告列表 -->
  <div class="gg">
      <div class="gg-nav">
          <div>筛选：</div>
          <select name="" @change="search()" v-model="syear">
            <option :value="item" v-for="(item,index) in year" :key='index'>{{item}}年</option>
          </select>
          <select name="" @change="search()" v-model="smonth">
            <option :value="item" v-for="(item,index) in month" :key="index">{{item}}月</option>
          </select>
      </div>
     <div class="gg-lists">
         <div class="gg-list container" v-for="(item,index) in gglist" :key="index">
             <div class="gg-list-tit">{{item.notictit}}</div>
             <div class="gg-list-msg">{{item.noticmsg}}</div>
             <div class="gg-list-xq">
                 <button>查看详情</button>
             </div>
         </div>
     </div>
  </div>
</template>
<script>

export default {
  name: 'List',
  data () {
    return {
    syear:'',
    smonth:'',
    year:[2019,1018,2017],
    month:[
            1,2,3,4,5,6,7,8,9,10,11,12
    ],
    gglist:[]
    }
  },
  mounted:function(){
      //获取公告信息
      this.$http.get('http://127.0.0.1:3000/notic',).then((res)=>{
           if(res.data.length>0){
             this.gglist=res.data;
           }else{
              this.gglist=[];
           }
          }).catch((err)=>{
              alert(err);
          }); 
  },
  methods:{
      search(){
          console.log(this.syear,this.smonth);
      }
  }
}
</script>
<style>
 .gg{
     width: 100%;
    
 }
 .gg-nav{
     padding-top: 20px;
     padding-bottom: 20px;
     display: flex;
     width: 20%;
     justify-content: space-around;
 }
 .gg-lists{
     padding-bottom: 40px;
     width: 100%;
     border-top: 1px solid #ccc;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;

 }
 .gg-list{
     margin-top: 40px;
     width: 40%;
     height: 200px;
     border: 1px solid rgb(187, 136, 136);
 }
 .gg-list-tit{
     line-height: 40px;
     text-align: center;
     font-size: 20px;
 }
 .gg-list-msg{
     height: 60%;
 }
 .gg-list-xq{
     width: 20%;
     margin-left: 80%;
 }
</style>

