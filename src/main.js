import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
//Vue.http.options.root = 'https://players-d0ffc-default-rtdb.firebaseio.com/'
Vue.http.options.root = 'https://playersbelgium-af474-default-rtdb.europe-west1.firebasedatabase.app/'
//Vue.http.options.root = 'http://localhost:3004/'
//Vue.http.headers.common['Auhorization'] = 'Basic token'

new Vue({
  el: '#app',
  render: h => h(App)
})
