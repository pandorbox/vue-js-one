<template><!--index.vue<body>-->
  <div>
  <Header />
  <div id="container" class="container">
    <table></table>
    <div class="black">
      <table class="table">
        <tr class="table-tr">
          <td>
            <h4>注册YueDong</h4>
          </td>
          <td>
            
          </td>
        </tr>
       <tr>
          <td colspan="2">
            <input type="text" placeholder="请输入您的用户名" class="uname"  v-model="username">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="password" placeholder="请输入您的密码" class="upwd"  v-model="userpwd">
          </td>
        </tr>
        <tr>
          <td class="autoLogin">
            <span></span>
          </td>
          <td>
           <span></span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="button" value="注册 " class="btn login btn-danger" @click="signin()">
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
    methods:{
      signin(){
        this.$http.post(
         "http://127.0.0.1:3000/demo/registe",
         `username=${this.username}&userpwd=${this.userpwd}`
        ).then(res=>{
            console.log(res);
           if(res.data==1){
            alert("注册成功!"); 
           
            this.$router.push("/login");
             //location.href=/
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


