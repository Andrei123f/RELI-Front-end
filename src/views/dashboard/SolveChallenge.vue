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
                          : ""
                      }}%</a
                    >
                    <a class="dropdown-item"
                      ><strong>P1: </strong>
                      {{
                        challengeDetails.challengeDetails
                          ? challengeDetails.challengeDetails.p1
                            ? +challengeDetails.challengeDetails.p1.toFixed(2)
                            : "0"
                          : ""
                      }}%</a
                    >
                    <a class="dropdown-item"
                      ><strong>P2: </strong>
                      {{
                        challengeDetails.challengeDetails
                          ? challengeDetails.challengeDetails.p2
                            ? +challengeDetails.challengeDetails.p2.toFixed(2)
                            : "0"
                          : ""
                      }}%</a
                    >
                  </div>
                </div>
              </span>
            </h6>
          </div>
          <div class="card-body terminal" v-if="!isLoadingData">
            <div class="challenge_container" v-highlightjs>
              <p class="challenge_description">
                🏆 In this challenge you will use and strengthen what you have
                learnt so far.
              </p>
              <br />
              <p class="challenge_description">📖 A quick recap:</p>
              <ul class="challenge_description">
                <li>
                  <b>Define a variable</b> : you can use <b>let</b>,
                  <b>const</b> or <b>var</b> to define a variable
                </li>
                <br />
                <li>
                  <b>if</b> : the if statement structure is
                  <code class="javascript">
                    if(condition){ <br />
                    &nbsp ...some action <br />
                    }
                  </code>
                  Where:
                  <ul class="challenge_description">
                    <li>
                      <b>condition</b> : is a variable that is either
                      <b>true</b> or <b>false</b>
                    </li>
                    <li>
                      <b>...some action</b> : is something that we'd like our
                      program to do
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <b>&&(and)</b> : a && b (a and b) - true when a is true and b
                  is true, false otherwise
                </li>
                <li>
                  <b>||(or)</b> : a || b (a or b) - true when either a is true
                  and b is true, false when a is false and b is false
                </li>
              </ul>
              <p class="challenge_description">
                📖 Cheat sheet for the logical operators:
              </p>
              <table class="table challenge_description">
                <thead>
                  <tr>
                    <th scope="col">Operator</th>
                    <th scope="col">a</th>
                    <th scope="col">b</th>
                    <th scope="col">Evaluates to</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">&&(and)</th>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: green"><b>true</b></td>
                  </tr>
                  <tr>
                    <th scope="row">&&(and)</th>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: red"><b>false</b></td>
                  </tr>
                  <tr>
                    <th scope="row">&&(and)</th>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: red"><b>false</b></td>
                  </tr>
                  <tr>
                    <th scope="row">&&(and)</th>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: red"><b>false</b></td>
                  </tr>
                  <tr>
                    <th scope="row">||(or)</th>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: green"><b>true</b></td>
                  </tr>
                  <tr>
                    <th scope="row">||(or)</th>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: green"><b>true</b></td>
                  </tr>
                  <tr>
                    <th scope="row">||(or)</th>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: green"><b>true</b></td>
                    <td style="color: green"><b>true</b></td>
                  </tr>
                  <tr>
                    <th scope="row">||(or)</th>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: red"><b>false</b></td>
                    <td style="color: red"><b>false</b></td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <p class="challenge_description">
                🔨 Now your task is to translate the following story
              </p>
              <p class="challenge_description">
                You are a car salesman. Everyday you talk to a lot of clients
                and are making significant car sales. <br />
                One day a troublesome customer comes and starts asking you a
                couple of questions, which you need to answer because you are a
                hard-working individual:

                <br /><br />
                - How many cars do you have in your dealership? <br />
                - We have a total of
                <span class="challenge_clue">25 cars</span> at the moment.
                <br /><br />

                - What happens if you sold all your sports cars? <br />
                -
                <span class="challenge_clue"
                  >If the number of sports cars is 0</span
                >
                then
                <span class="challenge_clue"
                  >we need to talk to our supplier.</span
                ><br /><br />

                - What happens if
                <span class="challenge_clue"
                  >you sold all your sports cars</span
                >
                and you
                <span class="challenge_clue"
                  >have one customer that wants to buy one</span
                >
                ? <br />

                - This is very unlikely, however, if this happens, then
                <span class="challenge_clue"
                  >we need to make a special contract</span
                >
                . <br /><br />

                - What happens
                <span class="challenge_clue"
                  >if the current number of sports cars would be 100</span
                >
                and
                <span class="challenge_clue"
                  >no costumers that want to buy your sports cars</span
                >
                ? <br />
                - Then probably
                <span class="challenge_clue">we will go bankrupt</span> .
                <br /><br />
              </p>
              <p class="challenge_description">
                ⚠️ When writing the code, use
                <code style="display: inline">currCarNumber</code> to determine
                the amount of cars your dealership currently has,
                <code style="display: inline">sportsCarNumber</code> to get the
                number of sportscar you have,
                <code style="display: inline">supplier</code> to talk to the
                suppliers, <code style="display: inline">clientSports</code> to
                get the amount of customers that want to buy sport cars,
                <code style="display: inline">specialContract</code> to make a
                special contract,
                <code style="display: inline">bankRupt</code> to go bankrupt and
                <b>what you have learnt so far</b>.
              </p>
              <p class="challenge_description">
                💡Tip: You will need to declare
                <code style="display: inline">currCarNumber</code> as a variable
                and the rest of variables should not be declared.
              </p>
            </div>

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
              >
              let currCarNumber = 25; <br><br>

if (sportsCarNumber == 0) { <br>
  &nbspif (clientSports == 1){ <br>
    &nbsp&nbsp specialContract; <br>
  &nbsp}else{ <br>
    &nbsp&nbsp supplier; <br>
  &nbsp}<br>
}else{ <br>
  &nbspif (sportsCarNumber == 100 && clientSports == 0){ <br>
    &nbsp&nbsp bankRupt; <br>
  &nbsp}<br>
}

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
    }),
    ...mapMutations({
      updateSolFlag: "challengeStore/SET_CURRENT_CHALLENGE_SOLUTION_SHOWN",
    }),
    async loadNextChallenge() {
      this.isLoadingData = true;
      const data = (this.challengeDetails = await this.getNextChallenge());
      this.chapterDetails = this.getCurrChapterDetails();
      this.errStack = data.challengeDetails.tests_failed ?? [];
      this.passStack = data.challengeDetails.tests_passed ?? [];
      this.showSol = data.challengeDetails.solution_shown ?? false;
      this.usercode = this.challengeDetails.challengeDetails
        ? this.challengeDetails.challengeDetails.user_answer ?? ""
        : "";
      this.isLoadingData = false;
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
        this.confetti();
      } else {
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