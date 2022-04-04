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
        commit("SET_UPDATE_CHAPTER_STATS_FLAG", false);
      } else {
        console.log("Something went wrong and could not fetch chapters stats.");
      }
    },

    async getDashboardData({ dispatch, commit, state }) {
      //we need to load new data only when we complete a new challenge
      if (state.updateChapterStats) {
        await dispatch("fetchDashboardData");
      }

      return state.chapterStats;
    },
  },
  getters: {},
};
export default dashboardStore;
