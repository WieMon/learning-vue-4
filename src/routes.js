import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Components/Home.vue'
// import SignUp from './Components/Signup.vue'
// import SignIn from './Components/Signin.vue'
// import Dashboard from './Components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {path:'/',component:Home},

]

export default new VueRouter({
  mode: 'history',
  routes
})
