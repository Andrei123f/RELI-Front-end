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
      //TODO call the authStore to see if we have a token
      //if we have a token, call a new API endpoint to see if that token is still usable
      //if that token is still usable, retrieve it
      //if that token is not still usable, get a new one and update it.
      
      /*
      const accessToken = rootGetters['authStore/getAccessToken'];

      const response = await axios.get(API_URL + "challenge/getStats", {
          headers: {
              'Authorization': `Bearer ${accessToken}`
          }
      }).catch((err) => {
        if(err.response.status == 403){
          console.log('needs to refresh the access token');
        }
      })
      return response;
      //now based on the response decide if you need to refresh the access token or not.
      //and whenever we come back to the page not to make the same request again...
      */
    },
  },
  getters: {},
};
export default dashboardStore;
