import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    getDevelopers: () => {
      return axios({
        method: 'get',
        baseURL: '/developers'
      })
    },
    createDeveloper: ({ state }, payload) => { 
      return axios({
        method: 'post',
        baseURL: '/developers',
        data: payload
      })
    },
    deleteDeveloper: ({ state }, payload) => {
      return axios({
        method: 'delete',
        baseURL: `/developers/${payload}`
      })
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
