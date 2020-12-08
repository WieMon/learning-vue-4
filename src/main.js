import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './routes.js';
import store from './store.js';
Vue.use(VueResource);

Vue.http.options.root = 'https://auth-user-af437-default-rtdb.firebaseio.com'

//Vue.http.options.root = 'https://playersbelgium-af474-default-rtdb.europe-west1.firebasedatabase.app/'

//Vue.http.options.root = 'https://players-d0ffc-default-rtdb.firebaseio.com/'
//Vue.http.options.root = 'http://localhost:3004/'
//Vue.http.headers.common['Auhorization'] = 'Basic token'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
