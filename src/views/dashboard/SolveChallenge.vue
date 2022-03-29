<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Solve a new challenge💻</h1>

    <div class="row">
      <div class="col-lg-6">
        <!-- Circle Buttons -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              <span v-if="isLoadingData" style="float: center">
                Loading Challenge <i class="fas fa-spinner fa-pulse"></i>
              </span>
              <span v-else> Challenge Description </span>
            </h6>
          </div>
          <div class="card-body">
            {{
              challengeDetails.challengeDetails
                ? challengeDetails.challengeDetails.challenge_text
                : null
            }}
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
              <a
                v-if="codeSyntaxError.status == 'CORRECT'"
                @click="submitAnswer()"
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
              <span v-if="isVerifyingSol" style="float: center">
                - verifying solution <i class="fas fa-spinner fa-pulse"></i>
              </span>
            </h6>
          </div>
          <div class="card-body">
            <Terminal
              :code="
                challengeDetails.challengeDetails
                  ? challengeDetails.challengeDetails.user_answer ?? 'hello'
                  : ''
              "
            ></Terminal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Terminal from "../../components/dashboard/challenge/Terminal.vue";
import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      challengeDetails: {},
      isLoadingData: false,
      isVerifyingSol: false,
      codeSyntaxError: {
        status: "PENDING",
        error_line: 0,
        error_text: "",
      },
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
    }),
    async loadNextChallenge() {
      this.isLoadingData = true;
      this.challengeDetails = await this.getNextChallenge();
      this.isLoadingData = false;
    },
    updateErrorSyntax(status, line, msg) {
      this.codeSyntaxError.status = status;
      this.codeSyntaxError.error_line = line;
      this.codeSyntaxError.error_text = msg;
    },
    submitAnswer() {
      this.isVerifyingSol = true;
    },
  },
  components: {
    Terminal,
  },
};
</script>

<style scoped>
.card-body {
  height: 700px;
}
</style>