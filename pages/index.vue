<template>
  <b-container class="bv-example-row">
    <b-row class="mt-3">
      <b-col cols="9">
        <Table/>
      </b-col>
      <b-col cols="3">
        <gender-chart v-if="loaded" :chartdata="chartdata" :options="options"></gender-chart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Table from "~/components/Table.vue";
import GenderChart from "~/components/GenderChart.vue";
import axios from "axios";
export default {
  components: {
    Table,
    GenderChart
  },
  data: () => ({
    chartdata: null,
    options: null,
    loaded: false
  }),
  async mounted() {
    this.loaded = false;
    await axios
      .get("/plotGenderGraph")
      .then(res => {
        console.log(res);
        this.loaded = true;
        this.chartdata = {
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "# users",
              data: [res.data.males, res.data.females],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)"
              ],
              borderWidth: 1
            }
          ]
        };

        this.options = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: " Gender Stats"
          }
        };
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>
