import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3004/'
Vue.http.headers.common['Auhorization'] = 'Basic token'

// Vue.http.interceptors.push((request,next)=>{
//     next( response => {
//         response.body = [...response.body,{hey:'Hi'}]
//     })
// })
new Vue({
  el: '#app',
  render: h => h(App)
})
