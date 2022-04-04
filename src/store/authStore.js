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
    refresh_token_at: null,
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
    },
    SET_NEW_REFRESH_ACCESS_TOKEN_TIME: (state) => {
      let currTime = Date.now();
      let refreshTime = currTime + 55 * 60 * 1000; //set the refresh access token to 55 minutes from now
      state.refresh_token_at = refreshTime;
    },
    RESET_AUTH_STATE(state) {
      state.isLoggedIn = false;
      state.refresh_token = null;
      state.access_token = null;
      state.userDetails = null;
      state.refreshAccessTokenStatus = null;
    },
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

        commit("SET_REFRESH_ACCESS_TOKEN_STATUS", "pending");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios
          .post(API_URL + "auth/refreshAccessToken", payload, {
            headers: {
              Authorization: `Bearer ${old_access_token}`,
            },
          })
          .catch((err) => {
            if (err.response.status == 403) {
              commit("SET_REFRESH_ACCESS_TOKEN_STATUS", "error");
              dispatch("attempt", {
                access_token: null,
                refresh_token: null,
                userDetails: null,
              });
            }
          });
        if (response.status == 200 && response.data.result == "SUCCESS") {
          commit("SET_REFRESH_ACCESS_TOKEN_STATUS", "success");
          commit("SET_NEW_REFRESH_ACCESS_TOKEN_TIME");
          const access_token = response.data.access_token;
          dispatch("attempt", { access_token, refresh_token, userDetails });
        } else {
          commit("SET_REFRESH_ACCESS_TOKEN_STATUS", "error");
          dispatch("attempt", {
            access_token: null,
            refresh_token: null,
            userDetails: null,
          });
        }
      }
    },
    async getValidAccessToken({ dispatch, state }) {
      const curr_access_token = state.access_token;
      const timeNow = Date.now();
      if (timeNow < state.refresh_token_at) {
        return curr_access_token;
      }

      let rtrn = null;
      const response = await axios
        .post(
          API_URL + "auth/validateAccessToken",
          {},
          {
            headers: {
              Authorization: `Bearer ${curr_access_token}`,
            },
          }
        )
        .catch(async (err) => {
          await dispatch("refreshAccessToken");
          rtrn = state.access_token;
        });
      if (rtrn) return rtrn;

      if (response.status == 200 && response.data.result == "SUCCESS") {
        return state.access_token;
      } else {
        //if token is not valid refresh it
        await dispatch("refreshAccessToken");
        return state.access_token;
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
    getRefreshAccessTokenStatus: (state) => state.refreshAccessTokenStatus,
  },
};
export default authStore;
