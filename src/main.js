import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import { createServer, Model, Factory } from 'miragejs';

createServer({
  models: {
    food: Model,
    developer: Model
  },
  factories: {
    contract: Factory.extend({
      contracted() {
        return Math.random() < 0.5;
      }
    })
  },
  routes() {
    this.get('/developers');
  },
  seeds(server) {
    server.create('developer', { name: 'Austin', picture: 'https://avatars.githubusercontent.com/u/18554928?v=4' });
    server.createList('contract', 235);
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
