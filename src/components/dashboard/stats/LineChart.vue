<template>
  <LineChart v-bind="lineChartProps" />
</template>

<script lang='ts'>
import { computed } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "Home",
  components: { LineChart },
  setup(props) {
    const labels = props.graphData.challenges_titles;
    const p1_data = props.graphData.p1_values;
    const p2_data = props.graphData.p2_values;
    const c_data = props.graphData.c_values;

    const getData = computed<ChartData<"line">>(() => ({
      labels: labels,
      datasets: [
        {
          label: "P1",
          data: p1_data,
          fill: false,
          borderColor: "#4bc0c0",
        },
        {
          label: "P2",
          data: p2_data,
          fill: false,
          borderColor: "#EE6352",
        },
        {
          label: "C",
          data: c_data,
          fill: false,
          borderColor: "#8AC926",
        },
      ],
    }));

    const options = computed<ChartOptions<"line">>(() => ({
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: "P1: how similar your solution is to ours,  P2: how correct is your solution based on our tests,  C: the correctness of the answer based on P1 and P2",
          position: "bottom",
        },
      },
    }));

    const { lineChartRef, lineChartProps } = useLineChart({
      options,
      chartData: getData,
    });

    return {
      getData,
      options,
      lineChartProps,
      lineChartRef,
    };
  },
  props: {
    graphData: {
      name: "Graph Data",
      type: Object,
      default: {},
    },
  },
};
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
