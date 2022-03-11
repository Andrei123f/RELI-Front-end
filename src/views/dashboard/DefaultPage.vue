<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
    </div>
    <!-- Content Row -->
    <div class="row">
      <div class="col-xs-12 col-lg-12">
        <div class="card-header card shadow mb-4" align-items-center>
          <h6 class="m-0 font-weight-bold text-primary">
            Your jorney so far
            <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
          </h6>
        </div>
        <div class="card-body" v-if="!isLoadingData">
          <ProgressBarVue :checkpoints="challengesData"></ProgressBarVue>
        </div>
      </div>
    </div>
    <!-- Content Row -->
    <div class="row">
      <!-- Area Chart -->
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
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
              Some other chart that looks cool
              <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
            </h6>
          </div>
          <!-- Card Body -->
          <div class="card-body" v-if="!isLoadingData">
            <LineChartVue></LineChartVue>
          </div>
        </div>
      </div>

      <!-- Pie Chart -->
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
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
              This chart displays something interesting I guess
              <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
            </h6>
          </div>
          <!-- Card Body -->
          <div class="card-body" v-if="!isLoadingData">
            <DoughnutChartVue></DoughnutChartVue>
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
       challengesData: [
        {
          title: "Challenge 1",
          completed: true,
        },
        {
          title: "Challenge 2",
          completed: true,
        },
        {
          title: "Challenge 3",
          completed: true,
        },
        {
          title: "Challenge 4",
          completed: true,
        },
        {
          title: "Challenge 5",
          completed: true,
        },
        {
          title: "Challenge 6",
          completed: true,
        },
        {
          title: "Challenge 7",
          completed: true,
        },
        {
          title: "Challenge 8",
          completed: true,
        },
        {
          title: "Challenge 10",
          completed: false,
        },
        {
          title: "Challenge 11",
          completed: false,
        },
      ],
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
      this.isLoadingData = false;
    },
  },
};
</script>
<style scoped>
.row {
  margin-bottom: 20px;
}
</style>
