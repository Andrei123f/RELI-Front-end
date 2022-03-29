import axios from "axios";

let API_URL = import.meta.env.VITE_API_URL;
// Create a new store instance.
const challengeStore = {
  namespaced: true,
  install: (app, options) => {},
  state: {
    currChallenge: {
      challenge_id: 0,
      chapter_id: 0,
      challengeDetails: {},
    },
    userSolution: {
      answer_text: "",
      p1: 0,
      p2: 0,
      C: 0,
    },
  },
  mutations: {
    SET_CURRENT_CHALLENGE_DETAILS(state, challenge) {
      state.currChallenge.challengeDetails = challenge;
    },
    SET_CURRENT_CHALLENGE_ID(state, challenge_id) {
      state.currChallenge.challenge_id = challenge_id;
    },
    SET_CURRENT_CHALLENGE_chapter_id(state, chapter_id) {
      state.currChallenge.chapter_id = chapter_id;
    },
  },
  actions: {
    async fetchNextChallenge({ dispatch, commit }) {
      const accessToken = await dispatch(
        "authStore/getValidAccessToken",
        {},
        { root: true }
      );
      const response = await axios
        .get(API_URL + "challenge/getNextChallenge", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .catch((err) => {
          console.log("Something went wrong with the getDashboardData method");
          console.log(err);
        });

      if (response.status == 200 && response.data.result == "SUCCESS") {
        commit("SET_CURRENT_CHALLENGE_DETAILS", response.data.challengeDetails);
        commit("SET_CURRENT_CHALLENGE_ID", response.data.challenge_id);
        commit("SET_CURRENT_CHALLENGE_chapter_id", response.data.chapter_id);
      } else {
        console.log("Something went wrong and could not fetch chapters stats.");
      }
    },

    async getNextChallenge({ dispatch, state }) {
      //todo decide how to store the current challenge details in the cache or smth
      if (true) {
        await dispatch("fetchNextChallenge");
      }
      return state.currChallenge;
    },
  },
  getters: {
    getCurrentChallenge: (state) => state.currChallenge,
    getCurrentChallengeChallengeId: (state) => state.currChallenge.challenge_id,
    getCurrentChallengeChapterId: (state) => state.currChallenge.chapter_id,
    getCurrentChallengeChallengeDetails: (state) =>
      state.currChallenge.challengeDetails,
  },
};
export default challengeStore;
