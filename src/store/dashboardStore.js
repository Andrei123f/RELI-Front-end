import axios from "axios";

let API_URL = import.meta.env.VITE_API_URL;
// Create a new store instance.
const dashboardStore = {
  namespaced: true,
  install: (app, options) => {},
  state: {
      
    challengeStats: [],
  },
  mutations: {},
  actions: {
    async getDashboardData({ dispatch, rootGetters }) {
      const accessToken = rootGetters['authStore/getAccessToken'];
      console.log(accessToken);
      const response = await axios.get(API_URL + "challenge/getStats", {
          headers: {
              'Authorization': `Bearer ${accessToken}`
          }
      });
      //now based on the response decide if you need to refresh the access token or not.
      //and whenever we come back to the page not to make the same request again...
      console.log(response);
      return response;
    },
  },
  getters: {},
};
export default dashboardStore;
