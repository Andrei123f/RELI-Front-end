<template>
  <div class="container-fluid">
    <h1 class="h3 mb-4 text-gray-800">Solve a new challenge💻</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              <span v-if="isLoadingData" style="float: center">
                Loading Challenge <i class="fas fa-spinner fa-pulse"></i>
              </span>
              <span v-else>
                {{ chapterDetails.chapter_name ?? "" }}:
                {{
                  challengeDetails.challengeDetails
                    ? challengeDetails.challengeDetails.challenge_name ?? ""
                    : ""
                }}
                <div class="dropdown mb-4" style="float: right">
                  <a
                    style="
                      float: right;
                      margin: 0;
                      text-align: center;
                      padding: 0;
                      text-decoration: none;
                      cursor: pointer;
                    "
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-glasses"></i> Current stats
                  </a>
                  <div
                    class="dropdown-menu animated--fade-in dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item"
                      ><strong>C: </strong>
                      {{
                        challengeDetails.challengeDetails
                          ? challengeDetails.challengeDetails.C
                            ? +challengeDetails.challengeDetails.C.toFixed(2)
                            : "0"
                          : "0"
                      }}%</a
                    >
                    <a class="dropdown-item"
                      ><strong>P1: </strong>
                      {{
                        challengeDetails.challengeDetails
                          ? challengeDetails.challengeDetails.p1
                            ? +challengeDetails.challengeDetails.p1.toFixed(2)
                            : "0"
                          : "0"
                      }}%</a
                    >
                    <a class="dropdown-item"
                      ><strong>P2: </strong>
                      {{
                        challengeDetails.challengeDetails
                          ? challengeDetails.challengeDetails.p2
                            ? +challengeDetails.challengeDetails.p2.toFixed(2)
                            : "0"
                          : "0"
                      }}%</a
                    >
                  </div>
                </div>
              </span>
            </h6>
          </div>
          <div class="card-body terminal" v-if="!isLoadingData">
            <div
              class="challenge_container"
              v-highlightjs
              v-html="
                challengeDetails.challengeDetails
                  ? challengeDetails.challengeDetails.challenge_text ?? ''
                  : ''
              "
            ></div>

            <br />
            <br />
            <div v-highlightjs>
              <p>
                <a
                  @click="seeSolution"
                  style="
                    float: left;
                    margin: 0;
                    padding: 0;
                    text-decoration: none;
                    cursor: pointer;
                  "
                >
                  See Solution -
                </a>
                If you see the solution your progress<strong>
                  will not be tracked.</strong
                >
              </p>
              <code
                v-show="showSol"
                v-html="
                  challengeDetails.challengeDetails
                    ? challengeDetails.challengeDetails.challenge_solution ?? ''
                    : ''
                "
              >
              </code>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              <span v-if="isLoadingData" style="float: center">
                Loading Terminal <i class="fas fa-spinner fa-pulse"></i>
              </span>
              <span v-else> Terminal </span>
              <span
                class="m-0 font-weight-bold"
                v-if="codeSyntaxError.status == 'ERROR'"
                style="color: #ed6a5a; float: right"
                >You have a problem in the code.
                {{ codeSyntaxError.error_line }}:
                {{ codeSyntaxError.error_text }}
              </span>
              <span v-if="codeSyntaxError.status == 'CORRECT'">
                <a
                  v-if="
                    challengeDetails.challengeDetails &&
                    challengeDetails.challengeDetails.C >= 80
                  "
                  @click="loadNextChallenge"
                  class="btn-primary"
                  style="
                    float: right;
                    margin: 0;
                    width: 150px;
                    height: 20px;
                    text-align: center;
                    padding: 0;
                    text-decoration: none;
                    cursor: pointer;
                    border-radius: 15px 50px 30px;
                  "
                >
                  Get next challenge
                </a>
                <a
                  v-else
                  @click="submitAnswer"
                  class="btn-primary"
                  style="
                    float: right;
                    margin: 0;
                    width: 150px;
                    height: 20px;
                    text-align: center;
                    padding: 0;
                    text-decoration: none;
                    cursor: pointer;
                    border-radius: 15px 50px 30px;
                  "
                >
                  Submit answer
                </a>
              </span>

              <span v-if="isVerifyingSol" style="float: center">
                - verifying solution <i class="fas fa-spinner fa-pulse"></i>
              </span>
            </h6>
          </div>
          <div class="card-body">
            <Terminal :code="usercode"></Terminal>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <TestsStack
      v-if="
        passStack && errStack && (passStack.length != 0 || errStack.length != 0)
      "
      style="width: 50%"
      :title="'Tests Failed'"
      :colourTitle="'#ED6A5A'"
      :colourTitleTests="'#ED6A5A'"
      :colourMsgTests="'#ED6A5A'"
      :messages="errStack"
      :loading="isVerifyingSol"
    ></TestsStack>
    <TestsStack
      v-if="
        passStack && errStack && (passStack.length != 0 || errStack.length != 0)
      "
      style="width: 50%"
      :title="'Tests Passed'"
      :colourTitle="'#00800d'"
      :colourTitleTests="'#00800d'"
      :colourMsgTests="'#00800d'"
      :messages="passStack"
      :loading="isVerifyingSol"
    ></TestsStack>
  </div>
</template>

<script>
import Terminal from "../../components/dashboard/challenge/Terminal.vue";
import TestsStack from "../../components/dashboard/challenge/TestsStack.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data: () => {
    return {
      usercode: "",
      showSol: false,
      chapterDetails: {},
      challengeDetails: {},
      isLoadingData: false,
      isVerifyingSol: false,
      codeSyntaxError: {
        status: "PENDING",
        error_line: 0,
        error_text: "",
      },
      errStack: [],
      passStack: [],
    };
  },
  setup() {},
  mounted() {
    this.loadNextChallenge();
    this.emitter.on("codeSyntaxError", (data) => {
      this.updateErrorSyntax(data.status, data.error_line, data.error_text);
    });
  },
  methods: {
    ...mapActions({
      getNextChallenge: "challengeStore/getNextChallenge",
      submitUserAnswer: "challengeStore/submitUserAnswer",
    }),
    ...mapGetters({
      getUserSol: "challengeStore/getUserSolution",
      getCurrChapterDetails: "challengeStore/getCurrChapterDetails",
      getCurrentUpdateFlag: "challengeStore/geUpdateCurrentChallengeFlag",
      getCurrentChallenge: "challengeStore/getCurrentChallenge",
    }),
    ...mapMutations({
      updateSolFlag: "challengeStore/SET_CURRENT_CHALLENGE_SOLUTION_SHOWN",
      updateNextChallengeFlag:
        "challengeStore/SET_UPDATE_CURRENT_CHALLENGE_FLAG",
    }),
    async loadNextChallenge() {
      const updateFlag = this.getCurrentUpdateFlag();
      this.isLoadingData = true;
      const data = (this.challengeDetails = updateFlag ? await this.getNextChallenge() : this.getCurrentChallenge());
      this.chapterDetails = this.getCurrChapterDetails();
      this.errStack = data.challengeDetails.tests_failed ?? [];
      this.passStack = data.challengeDetails.tests_passed ?? [];
      this.showSol = data.challengeDetails.solution_shown ?? false;
      this.usercode = this.challengeDetails.challengeDetails
        ? this.challengeDetails.challengeDetails.user_answer ?? ""
        : "";
      this.isLoadingData = false;
      this.updateNextChallengeFlag(false);
    },
    updateErrorSyntax(status, line, msg) {
      this.codeSyntaxError.status = status;
      this.codeSyntaxError.error_line = line;
      this.codeSyntaxError.error_text = msg;
    },
    async submitAnswer() {
      this.isVerifyingSol = true;
      const response = await this.submitUserAnswer();
      if (response.result == "SUCCESS") {
        this.emitter.emit("displayMessage", [
          "success",
          `API submission succeded: ${response.message}`,
        ]);
        this.updateNextChallengeFlag(true);
        this.confetti();
      } else {
        this.updateNextChallengeFlag(false);
        this.emitter.emit("displayMessage", [
          "error",
          `API submission failed: ${
            response.message ? response.message : response.resReq.message ?? ""
          }`,
        ]);
      }
      this.challengeDetails.challengeDetails.C = response.C;
      this.challengeDetails.challengeDetails.p1 = response.p1;
      this.challengeDetails.challengeDetails.p2 = response.p2;
      this.errStack = response.testFailedStack;
      this.passStack = response.testPassedStack;

      this.isVerifyingSol = false;
    },
    seeSolution() {
      this.showSol = !this.showSol;
      this.updateSolFlag(true);
    },
    confetti() {
      let emitters = [];
      for (let i = 20; i < 100; i += 20) {
        emitters.push({
          life: {
            duration: 1,
            count: 4,
          },
          position: {
            x: i,
            y: 0,
          },
          particles: {
            move: {
              direction: "buttom",
            },
            color: {
              value: ["#A2FAA3", "#78C0E0", "#FFE9F3", "#F4BFDB", "#E07A5F"],
            },
          },
        });
      }

      tsParticles.load("tsparticles", {
        emitters: emitters,
        preset: "confetti",
      });
    },
  },
  watch: {
    usercode(newVal, oldVal) {
      this.usercode = newVal;
    },
  },
  components: {
    Terminal,
    TestsStack,
  },
};
</script>

<style scoped>
.card-body {
  height: 700px;
  float: right;
}

.challenge_container ::v-deep .challenge_description {
  color: black;
  font-size: 18px;
}
.challenge_container ::v-deep .challenge_clue {
  font-style: italic;
  color: black;
  font-weight: bold;

  font-size: 18px;
}

.challenge_container ::v-deep .given_variable {
  background-color: #272822;
}

.challenge_container ::v-deep .challenge_example {
  color: black;
  font-size: 18px;
}
</style>