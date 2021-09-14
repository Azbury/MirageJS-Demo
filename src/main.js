import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    food: Model,
    developer: Model
  },
  routes() {
    this.get('/developers');
  },
  seeds(server) {
    server.create('developer', { name: 'Austin', picture: 'https://avatars.githubusercontent.com/u/18554928?v=4' });
    server.create('developer', { name: 'Chad', picture: 'https://avatars.githubusercontent.com/u/2921868?v=4' });
    server.create('developer', { name: 'Ryan', picture: 'https://avatars.githubusercontent.com/u/5217768?v=4' });
    server.create('developer', { name: 'Ted', picture: 'https://avatars.githubusercontent.com/u/5313708?v=4' });
    server.create('developer', { name: 'John', picture: 'https://avatars.githubusercontent.com/u/10562755?v=4' });
    server.create('developer', { name: 'Jamie', picture: 'https://avatars.githubusercontent.com/u/24712731?v=4' });
  }
})

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    getDevelopers: () => {
      return axios({
        method: 'get',
        baseURL: '/developers'
      })
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
