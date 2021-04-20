import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false,
    username:""
  },
  mutations: {
    signin(state,username){ 
      state.islogin=true;
      state.username=username; 
    },
    signout(){ 
      this.state.islogin=false;
      this.state.username="";
    }
  },
  actions: {

  }
})
