import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes'

Vue.use(Vuex);

const FbAuth = 'https://identitytoolkit.googleapis.com/v1';
const FbApiKey = 'AIzaSyAKQAEpKuuHfAZUUYNFa8BY6O1OV94HYVo';

export default new Vuex.Store ({
  state: {
    email: '',
    token: '',
    refresh: '',
    user: null,
    addpost: false,
    homePosts: null
  },
  getters: {
    isAuth(state) {
      if(state.token) {return true}
      return false
    },
    addPostStatus(state) {
      return state.addpost
    },
    getAllPosts(state) {
      return state.homePosts;
    }
  },
  mutations: {
    auth(state,authData) {
      state.email = authData.email;
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;
    },
    logout(state) {
      state.email = null;
      state.token = null;
      state.refresh = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      router.push('/')
    },
    addUserInfo(state, userInfo){
      state.user = userInfo
    },
    addPost(state) {
      state.addpost = true
    },
    getAllPosts(state,posts) {
      state.homePosts = posts;
    }
  },

  actions: {
    signup({ commit }, payload) {

      Vue.http.post(`${FbAuth}/accounts:signUp?key=${FbApiKey}`,{
        ...payload,
        returnSecureToken: true
      })
      .then( response => response.json())
      .then( authData => {
        commit('auth',authData);
        localStorage.setItem('token',authData.idToken);
        localStorage.setItem('refresh',authData.refreshToken);
      })
      .catch( error => console.log(error))
    },
    signin({ commit }, payload) {
      Vue.http.post(`${FbAuth}/accounts:signInWithPassword?key=${FbApiKey}`,{
        ...payload,
        returnSecureToken: true
      })
      .then( response => response.json())
      .then( authData => {
        commit('auth',authData);
        localStorage.setItem('token',authData.idToken);
        localStorage.setItem('refresh',authData.refreshToken);
      })
      .catch( error => console.log(error))

    },
    refreshToken({commit}){
      const refreshToken = localStorage.getItem("refresh");
      if(refreshToken){
        Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${FbApiKey}`,{
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        })
        .then( response => response.json())
        .then( authData => {
          commit('auth',{
            idToken: authData.id_token,
            refreshToken: authData.refresh_token
          });
          localStorage.setItem('token',authData.id_token);
          localStorage.setItem('refresh',authData.refresh_token);
        })
      }
    },
    getUserInfo({commit},payload){
      Vue.http.post(`${FbAuth}/accounts:lookup?key=${FbApiKey}`,{
        idToken: payload
      })
      .then( response => response.json())
      .then( res => {
        commit("addUserInfo",res.users[0])
      })
    },
    addPost({ commit, state},payload) {
      Vue.http.post(`posts.json?auth=${state.token}`,payload)
      .then(response => response.json())
      .then(response=> {
        //console.log(response)
        commit('addPost')
      })
    },
    getAllPosts({ commit },payload ){
      Vue.http.get(`posts.json?print=pretty`)
      .then(response => response.json())
      .then (response => {
      //console.log(response)
      const posts = [];
      for(let key in response) {
        posts.push({
          ...response[key],
          id: key
        })
      }
      //console.log(posts)
      commit('getAllPosts',posts.reverse())
     })
    }
  }
})
