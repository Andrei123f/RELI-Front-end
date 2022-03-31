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
      solution_shown: false,
    },
    currChapter: {
      perc_done: 0,
      chapter_name: "",
      chapter_description: "",
      chapter_id: "",
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
    SET_CURRENT_CHALLENGE_SOLUTION_SHOWN(state, sol_shown) {
      state.currChallenge.solution_shown = sol_shown;
    },
    SET_CURRENT_CHAPTER_DETAILS(state, chapter) {
      state.currChapter = chapter;
    },
    SET_USER_ANSWER_TEXT(state, user_answer) {
      state.userSolution.answer_text = user_answer;
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
        commit("SET_CURRENT_CHAPTER_DETAILS", response.data.chapterDetails);
        commit(
          "SET_CURRENT_CHALLENGE_SOLUTION_SHOWN",
          response.data.challengeDetails.solution_shown
        );
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
    async submitUserAnswer({ dispatch, state }) {
      const accessToken = await dispatch(
        "authStore/getValidAccessToken",
        {},
        { root: true }
      );

      const response = await axios
        .post(
          API_URL + "challenge/evaluate",
          {
            code: state.userSolution.answer_text,
            chapter_code: state.currChallenge.chapter_id,
            challenge_code: state.currChallenge.challenge_id,
            solution_shown: state.currChallenge.solution_shown,
            bindings: {}, //for now bindings is empty because we are still experiencing with this
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .catch((err) => {
          console.log(
            "Something went wrong when submitting user's solution. Error: "
          );
          console.log(err);
        });
      return response.data;
    },
  },
  getters: {
    getCurrentChallenge: (state) => state.currChallenge,
    getCurrentChallengeChallengeId: (state) => state.currChallenge.challenge_id,
    getCurrentChallengeChapterId: (state) => state.currChallenge.chapter_id,
    getCurrentChallengeChallengeDetails: (state) =>
      state.currChallenge.challengeDetails,
    getUserSolution: (state) => state.userSolution.answer_text,
    getCurrChapterDetails: (state) => state.currChapter,
  },
};
export default challengeStore;
