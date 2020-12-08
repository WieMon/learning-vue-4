import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Components/Home.vue'
import SignUp from './Components/Signup.vue'
import SignIn from './Components/Signin.vue'
import Player from './Components/Player.vue';
import store from './store';

Vue.use(VueRouter);

const preventRoutes = {
  beforeEnter: (to, from, next) => {
    if(store.state.token) {
      next();
      } else {
        next('/')
    }
  }
}

const routes = [
  {path:'/',component:Home},
  { path:'/signup', component: SignUp },
  { path:'/signin', component: SignIn },
  { path:'/player', component: Player,...preventRoutes}


]

export default new VueRouter({
  mode: 'history',
  routes
})
