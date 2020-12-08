import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Components/Home.vue'
import SignUp from './Components/Signup.vue'
import SignIn from './Components/Signin.vue'
import Player from './Components/Player.vue'
import MainPlayer from './Components/MainPlayer.vue'
import ListOfPlayers from './Components/ListOfPlayers.vue'
import AddPlayer from './Components/AddPlayer.vue'
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
  { path:'/player', component: Player,...preventRoutes, children:[
    {path:'/', component: MainPlayer},
    {path:'list_of_players', component: ListOfPlayers},
    {path:'add_player', component: AddPlayer}
  ]}


]

export default new VueRouter({
  mode: 'history',
  routes
})
