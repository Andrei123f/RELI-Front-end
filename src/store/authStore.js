import axios from 'axios';

let API_URL = import.meta.env.VITE_API_URL;
// Create a new store instance.
const authStore = {
    namespaced: true,
    install: (app, options) => {},
    state: {
        isLoggedIn: false,
        refresh_token: null,
        access_token: null,
        username: null,
        email: null,
        user:null,
    },
    mutations: {
      SET_TOKENS: (state, {access_token, refresh_token}) => {
        state.access_token = access_token;
        state.refresh_token = refresh_token;
      },
      SET_LOGIN_STATUS: (state, login_status) => {
        state.isLoggedIn = login_status;
      }
    },
    actions: {
      async signIn ({dispatch}, payload) {
        const response = await axios.post(API_URL + 'user/login', payload);
        const access_token = response.data.access_token.token_value;
        const refresh_token = response.data.refresh_token.token_value;
        
        dispatch('attempt', {access_token, refresh_token});

        return response;
      },
      async attempt ({commit}, {access_token, refresh_token}) {
        commit('SET_TOKENS', {access_token, refresh_token});
        if(access_token && refresh_token){
          commit('SET_LOGIN_STATUS', true)
        }
      }

    },
    getters: {
        getLoginStatus: state => state.isLoggedIn,
        getRefreshToken: state => state.refresh_token,
        getAccessToken: state => state.access_token
    }
}
export default authStore;