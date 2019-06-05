<template><!--index.vue<body>-->
  <div >
  <Header/>
  <div id="container" class="container">
    <div class="black">
      <table class="table">
        <tr class="table-tr">
          <td>
            <h4>登录YueDong</h4>
          </td>
          <td>
            <router-link to="/index"><span>游客浏览</span></router-link>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text" placeholder="请输入您的用户名" class="uname" v-model="username">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="password" placeholder="请输入您的密码" class="upwd" v-model="userpwd">
          </td>
        </tr>
        <tr>
          <td class="autoLogin">
            <input type="checkbox">自动登录
          </td>
          <td>
            <router-link to="/register"><span>去注册》</span></router-link>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="button" value="登录" class="btn login btn-info" @click="signin()">
          </td>
        </tr>
      </table>
    </div>
  </div>
   <Foote />
  </div>
   
</template>
<script>
import Header from '@/components/Headerlogin.vue'
import Foote from '@/components/Foote.vue'
  export default {
    components: {
    Header,
    Foote
  },
    data(){
      return {username:"",userpwd:""}
    },
    mounted(){
      this.$store.state.islogin = false;
      this.$store.state.username = ''; 
    },
    methods:{
       
      signin(){
        this.$http.post(
         "http://127.0.0.1:3000/demo/login",
         `username=${this.username}&userpwd=${this.userpwd}`
        ).then(res=>{
           if(res.data==1){
            alert("登陆成功!"); 
              this.$store.commit(
              "signin", this.username
              );
                this.$router.push("/index");
            
           }else{
             alert(res.data.msg);
           }
        })
      }
    }
  }
</script>
<style scoped>/*login.html <style>*/
  #container{
        width:100%;
        height:600px;
        background:url(./img/bg.png) no-repeat;
        background-size: 100%;
      }
      #container div.black{
        width:300px;
        height:300px;
        background:rgba(0,0,0,.3);
        margin:10% 0 0 60%;
      }
      #container div.black table{
        width:100%;
      }
      #container h4{
        color:#fff;
        margin:0;
      }
      #container a{
        color:#fff;
        text-decoration:none;
        font-size:12px;
      }
      input.uname,input.upwd{
        width:100%;
        height:35px;
        border:none;
        outline:0;
        padding-left:15px;
        box-sizing:border-box;
        background:#fff url(/img/register/yhm.png) no-repeat 97% center;
      }
      input.upwd{
        background-image:url(/img/register/mm.png);
      }
      input.login{
        width:100%;
        height:36px;
        margin-top:20px;
      }
      td.autoLogin{
        color:#fff;
        font-size:12px;
      }
      .table{
         border-collapse:  separate;
        border-spacing:   20px;
      }
</style>


