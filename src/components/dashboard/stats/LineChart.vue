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
  setup() {
    const getData = computed<ChartData<"line">>(() => ({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Bitcoin",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "#4bc0c0",
        },
        {
          label: "Ethereum",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: "#565656",
        },
      ],
    }));

    const options = computed<ChartOptions<"line">>(() => ({
      plugins: {
        legend: {
          display: true,
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
