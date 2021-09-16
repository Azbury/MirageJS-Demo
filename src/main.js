import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import { createServer, Model, Factory } from 'miragejs';

createServer({
  models: {
    developer: Model
  },
  factories: {
    developer: Factory.extend({
      name(index) {
        let names = ['Ashley', 'Beth', 'Scott', 'Joe', 'Bill', 'Kevin'];
        return names[index];
      },
      picture(index) {
        let pictures = [
          'https://avatars.githubusercontent.com/u/80332746?v=4',
          'https://avatars.githubusercontent.com/u/1625929?v=4',
          'https://avatars.githubusercontent.com/u/3587144?v=4',
          'https://avatars.githubusercontent.com/u/57579967?v=4',
          'https://avatars.githubusercontent.com/u/3382469?v=4',
          'https://avatars.githubusercontent.com/u/6231956?v=4'
        ];
        return pictures[index];
      }
    })
  },
  routes() {
    this.get('/developers');
    this.post('/developers', function (schema, request) {
      let attrs = JSON.parse(request.requestBody);
      return schema.developers.create(attrs);
    });
    this.del('/developers/:id')
  },
  seeds(server) {
    server.createList('developer', 6);
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
