<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">
        Challenges roadmap<span style="font-size: 23px">🧭</span>
      </h1>
    </div>
    <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
    <div
      class="row"
      v-for="(chapter, index) in formattedChallengesData"
      v-bind:key="index"
    >
      <div class="col-xs-12 col-lg-12">
        <div class="card-header" align-items-center>
          <h6
            class="m-0 font-weight-bold"
            v-bind:style="{
              color: chapter.perc_done == 100 ? '#008148' : 'gray',
            }"
          >
            {{ chapter.chapter_name }}: {{ chapter.chapter_description }}
            {{ chapter.perc_done == 100 ? "- Completed" : "" }}
          </h6>
        </div>
        <div class="card-body" v-if="!isLoadingData">
          <ProgressBarVue
            :hasRouterLinks="true"
            :checkpoints="chapter.challenges"
            :uniqueKey="chapter.chapter_id"
          ></ProgressBarVue>
        </div>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
import ProgressBarVue from "../../components/dashboard/stats/ProgressBar.vue";
import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      formattedChallengesData: [],
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
  },

  methods: {
    ...mapActions({
      getDashboardData: "dashboardStore/getDashboardData",
    }),
    async loadDashboardData() {
      this.isLoadingData = true;
      const dashBoardData = await this.getDashboardData();
      this.rawChapterData = dashBoardData;
      this.formatProgressChallengesData();
      this.isLoadingData = false;
    },
    formatProgressChallengesData() {
      for (const chapterId in this.rawChapterData) {
        const chapter = this.rawChapterData[chapterId];
        let challenges = [];
        for (const challengeId in chapter.challenges) {
          const challenge =
            this.rawChapterData[chapterId].challenges[challengeId];
          challenges.push({
            title: challenge.challenge_name,
            description: "",
            completed: challenge.completed,
            redirectConf: {
              toName: "Challenge/solve",
              passData: {
                chapter_id: parseInt(chapterId) + 1,
                challenge_id: parseInt(challengeId) + 1,
              },
            },
          });
        }
        this.formattedChallengesData.push({
          chapter_id: chapter.chapter_id,
          chapter_name: chapter.chapter_name,
          chapter_description: chapter.chapter_description,
          challenges: challenges,
          perc_done: chapter.perc_done,
        });
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
