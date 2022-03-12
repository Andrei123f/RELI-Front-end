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
    async getDashboardData({ dispatch }) {
      const accessToken = await dispatch(
        "authStore/getValidAccessToken",
        {},
        { root: true }
      );
      const response = await axios
        .get(API_URL + "challenge/getStats", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .catch((err) => {
          console.log("Something went wrong with the getDashboardData method");
          console.log(err);
        });
      return response;
    },
  },
  getters: {},
};
export default dashboardStore;
