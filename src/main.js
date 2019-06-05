// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'


import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false
Vue.use(Vuex,VueAxios,axios)
Vue.prototype.$http = axios
//要求axios每次必须携带cookie去服务端
axios.defaults.withCredentials=true;

Vue.filter("date",(val)=>{
  //把bigint转换为 yyy-mm-dd
  var date=new Date(val);
  var yy=date.getFullYear();
  var mm=date.getMonth()+1;
      mm=mm>9 ? mm : "0"+mm;
  var dd=date.getDate();
    dd=dd>9 ? dd : "0"+dd;
  
    return yy+'-'+mm+'-'+dd
  })
  Vue.filter("datetime",(val)=>{
    //把bigint转换为yyy-mm-dd hh:mm:ss
    var date=new Date(val);
  var yy=date.getFullYear();
  var mm=date.getMonth()+1;
      mm=mm>9 ? mm : "0"+mm;
  var dd=date.getDate();
    dd=dd>9 ? dd : "0"+dd;
  var hh=date.getHours();
    hh=hh>9?mm:"0"+mm;
  var cc=date.getMinutes();
    cc=cc>9?cc:"0"+cc;
  var ss=date.getSeconds();
    ss=ss>9?ss:"0"+ss;
    return yy+'-'+mm+'-'+dd+'-'+hh+'-'+cc+'-'+ss
  })

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
