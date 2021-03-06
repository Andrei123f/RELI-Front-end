<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">
        Dashboard <span style="font-size: 23px">📈</span>
      </h1>
    </div>
    <div class="row">
      <div class="col-xs-12 col-lg-12">
        <div class="card-header card shadow mb-4" align-items-center>
          <h6 class="m-0 font-weight-bold text-primary">
            Your jorney so far
            <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
          </h6>
        </div>
        <div class="card-body" v-if="!isLoadingData">
          <ProgressBarVue :checkpoints="formattedChaptersData"></ProgressBarVue>
        </div>
      </div>
    </div>
    <div class="row"></div>
    <div class="row">
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <div
            class="
              card-header
              py-3
              d-flex
              flex-row
              align-items-center
              justify-content-between
            "
          >
            <h6 class="m-0 font-weight-bold text-primary">
              Challenge progress - P1, P2 and C stats
              <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
            </h6>
          </div>
          <div class="card-body" v-if="!isLoadingData">
            <LineChartVue :graphData="formattedLineChart"></LineChartVue>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <div
            class="
              card-header
              py-3
              d-flex
              flex-row
              align-items-center
              justify-content-between
            "
          >
            <h6 class="m-0 font-weight-bold text-primary">
              Challenge progress - challenge stats
              <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
            </h6>
          </div>
          <div class="card-body" v-if="!isLoadingData">
            <DoughnutChartVue
              :graphData="formattedDoughnutChart"
            ></DoughnutChartVue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBarVue from "../../components/dashboard/stats/ProgressBar.vue";
import DoughnutChartVue from "../../components/dashboard/stats/DoughnutChart.vue";
import ProgressBar from "../../components/dashboard/stats/ProgressBar.vue";
import LineChartVue from "../../components/dashboard/stats/LineChart.vue";
import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      formattedChaptersData: [],
      formattedLineChart: {
        challenges_titles: [],
        p1_values: [],
        p2_values: [],
        c_values: [],
      },
      formattedDoughnutChart: {
        challenges_failed: 0,
        challenges_complete: 0,
        challenges_untried: 0,
        challenges_sol_shown: 0,
      },
      rawChapterData: [],
      isLoadingData: false,
    };
  },
  mounted() {
    this.loadDashboardData();
  },
  setup() {},

  components: {
    ProgressBarVue,
    DoughnutChartVue,
    ProgressBar,
    LineChartVue,
  },

  methods: {
    ...mapActions({
      getDashboardData: "dashboardStore/getDashboardData",
    }),
    async loadDashboardData() {
      this.isLoadingData = true;
      const dashBoardData = await this.getDashboardData();
      this.rawChapterData = dashBoardData;
      this.formatDashBoardData();
      this.formatChallengeData();
      this.isLoadingData = false;
    },
    formatDashBoardData() {
      this.formattedChaptersData.push({
        title: "Account Created",
        description: `Welcome, ${this.$store.getters["authStore/getUserDetails"].username}!`,
        completed: true,
      });
      for (const chapterId in this.rawChapterData) {
        this.formattedChaptersData.push({
          title: this.rawChapterData[chapterId].chapter_name,
          description: this.rawChapterData[chapterId].chapter_description ?? "",
          completed: this.rawChapterData[chapterId].perc_done == 100,
        });
      }
    },
    formatChallengeData() {
      for (const chapterId in this.rawChapterData) {
        for (const challengeId in this.rawChapterData[chapterId].challenges) {
          const challenge =
            this.rawChapterData[chapterId].challenges[challengeId];
          if (challenge.completed && !challenge.solution_shown) {
            this.formattedDoughnutChart.challenges_complete++;
            this.formattedLineChart.challenges_titles.push(
              challenge.challenge_name
            );
            this.formattedLineChart.p1_values.push(challenge.p1);
            this.formattedLineChart.p2_values.push(challenge.p2);
            this.formattedLineChart.c_values.push(challenge.C);
          } else {
            if (challenge.C == 0) {
              this.formattedDoughnutChart.challenges_untried++;
            } else if (challenge.C >= 80) {
              this.formattedDoughnutChart.challenges_complete++;
            } else {
              this.formattedDoughnutChart.challenges_failed++;
            }
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.row {
  margin-bottom: 20px;
}
</style>
