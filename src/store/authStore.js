import axios from "axios";

let API_URL = import.meta.env.VITE_API_URL;
// Create a new store instance.
const authStore = {
  namespaced: true,
  install: (app, options) => {},
  state: {
    isLoggedIn: false,
    refresh_token: null,
    access_token: null,
    userDetails: null,
    refreshAccessTokenStatus: null,
  },
  mutations: {
    SET_TOKENS: (state, { access_token, refresh_token }) => {
      state.access_token = access_token;
      state.refresh_token = refresh_token;
    },
    SET_LOGIN_STATUS: (state, login_status) => {
      state.isLoggedIn = login_status;
    },
    SET_USER_DETAILS: (state, userDetails) => {
      state.userDetails = userDetails;
    },
    SET_REFRESH_ACCESS_TOKEN_STATUS: (state, s) => {
      state.refreshAccessTokenStatus = s;
    }
  },
  actions: {
    async signIn({ dispatch }, payload) {
      const response = await axios.post(API_URL + "user/login", payload);
      const access_token = response.data.access_token.token_value;
      const refresh_token = response.data.refresh_token.token_value;
      const userDetails = response.data.userDetatails;

      dispatch("attempt", { access_token, refresh_token, userDetails });
      return response;
    },
    async refreshAccessToken({ dispatch, commit, state }) {
      if (state.access_token && state.refresh_token) {
        const old_access_token = state.access_token;
        const refresh_token = state.refresh_token;
        const userDetails = state.userDetails;

        const payload = {
          refresh_token: refresh_token,
        };

        commit("SET_REFRESH_ACCESS_TOKEN_STATUS", 'pending');
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await axios
          .post(API_URL + "auth/refreshAccessToken", payload, {
            headers: {
              Authorization: `Bearer ${old_access_token}`,
            },
          })
          .catch((err) => {
            if (err.response.status == 403) {
              commit("SET_REFRESH_ACCESS_TOKEN_STATUS", 'error');
              //logout user and display info message
              
              dispatch("attempt", {
                access_token: null,
                refresh_token: null,
                userDetails: null,
              });
              
            }
          });
        console.log(response);
        if (response.status == 200 && response.data.result == "SUCCESS") {
          commit("SET_REFRESH_ACCESS_TOKEN_STATUS", 'success');
          const access_token = response.data.access_token;
          dispatch("attempt", { access_token, refresh_token, userDetails });
        } else {
          commit("SET_REFRESH_ACCESS_TOKEN_STATUS", 'error');
          //logout user and display info message
            dispatch("attempt", {
            access_token: null,
            refresh_token: null,
            userDetails: null,
          });
        }
      }
    },
    async attempt({ commit }, { access_token, refresh_token, userDetails }) {
      commit("SET_TOKENS", { access_token, refresh_token });
      commit("SET_USER_DETAILS", userDetails);
      commit("SET_LOGIN_STATUS", access_token && refresh_token ? true : false);
    },
  },
  getters: {
    getLoginStatus: (state) => state.isLoggedIn,
    getRefreshToken: (state) => state.refresh_token,
    getAccessToken: (state) => state.access_token,
    getUserDetails: (state) => state.userDetails,
    getRefreshAccessTokenStatus: (state) => state.refreshAccessTokenStatus
  },
};
export default authStore;
