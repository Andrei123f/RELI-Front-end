<template>
  <DoughnutChart v-bind="doughnutChartProps" />
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from "vue";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
  name: "App",
  components: { DoughnutChart },
  setup(props) {
    const dataValues = ref([
      props.graphData.challenges_untried,
      props.graphData.challenges_failed,
      props.graphData.challenges_complete,
    ]);
    const toggleLegend = ref(true);

    const testData = computed<ChartData<"doughnut">>(() => ({
      labels: [
        "Untried Challenges",
        "Failed Challenges",
        "Completed Challenges",
      ],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: ["#77CEFF", "#ED6A5A", "#16DB65"],
        },
      ],
    }));

    const options = computed<ChartOptions<"doughnut">>(() => ({
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Completed: C is at least 80%, Failed: C is lower than 80%",
          position: "bottom"
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    let index = 20;

    function shuffleData() {
      // dataValues.value = shuffle(dataValues.value);
      dataValues.value.push(++index);
      console.log(doughnutChartRef.value.chartInstance);
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
    };
  },
  props: {
    graphData: {
      name: "Graph Data",
      type: Object,
      default: {},
    },
  },
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
