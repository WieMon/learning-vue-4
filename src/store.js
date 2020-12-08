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
  },
  getters: {

  },
  mutations: {
    auth(state,authData) {
      state.email = authData.email;
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;
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
        //console.log(authData)
      })
      .catch( error => console.log(error))
    },
  }
})
