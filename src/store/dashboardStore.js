import axios from "axios";

let API_URL = import.meta.env.VITE_API_URL;
// Create a new store instance.
const dashboardStore = {
  namespaced: true,
  install: (app, options) => {},
  state: {
    chapterStats: [],
    updateChapterStats: true,
  },
  mutations: {
    SET_UPDATE_CHAPTER_STATS_FLAG(state, flag) {
      state.updateChapterStats = flag;
    },
    SET_CHAPTER_STATS(state, stats) {
      state.chapterStats = stats;
    },
  },
  actions: {
    async fetchDashboardData({ dispatch, commit }) {
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

      if (response.status == 200 && response.data.result == "SUCCESS") {
        commit("SET_CHAPTER_STATS", response.data.chaptersData.chapters);
      } else {
        console.log("Something went wrong and could not fetch chapters stats.");
      }
    },

    async getDashboardData({ dispatch, commit, state }) {
      if (true) {
        //todo decide how to handle caching the results so no unnecessary requests are made...
        await dispatch("fetchDashboardData");
        commit("SET_UPDATE_CHAPTER_STATS_FLAG", false);
      }

      return state.chapterStats;
    },
  },
  getters: {},
};
export default dashboardStore;
