<template>
  <div style="height: 48px; width: 112px;">
    <Line ref="lineChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export default {
  name: 'LineChart',
  components: { Line },
  props: {
    increase: {
      type: Boolean,
      required: true
    },
    datasets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      gradient: null,
      gradient2: null,
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#28C165',
            borderWidth: 1,
            backgroundColor: 'rgba(95, 223, 146, 0.5)',
            data: this.datasets,
            fill: true
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.4
          }
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
              color: 'rgba(0, 0, 0, 0)'
            },
            ticks: {
              display: false
            }
          },
          x: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
              color: 'rgba(0, 0, 0, 0)'
            },
            ticks: {
              display: false
            }
          }
        }
      }
    }
  },
  mounted() {
    // Wait for DOM update, then access the chart instance
    this.$nextTick(() => {
      this.setChart(this.$refs.lineChart.chart);
    });
  },

  methods: {
    setChart(chart) {
      const ctx = chart.ctx;
      this.gradient = ctx.createLinearGradient(0, 0, 0, 48);
      this.gradient.addColorStop(0.1119, 'rgba(95, 223, 146, 0.5)');
      this.gradient.addColorStop(0.1118, 'rgba(95, 223, 146, 0.3)');
      this.gradient.addColorStop(0.93, 'rgba(196, 196, 196, 0)');

      this.gradient2 = ctx.createLinearGradient(0, 0, 0, 48);
      this.gradient2.addColorStop(0, 'rgba(255, 189, 189, 0.5)');
      this.gradient2.addColorStop(0.94, 'rgba(196, 196, 196, 0)');

      this.updateColors(this.increase);

      chart.update('none');
    },
    updateColors(isIncrease) {
      if (!this.gradient || !this.gradient2) return;

      this.chartData = {
        ...this.chartData,
        datasets: [{
          ...this.chartData.datasets[0],
          backgroundColor: isIncrease ? this.gradient : this.gradient2,
          borderColor: isIncrease ? '#28C165' : '#F4574D'
        }]
      };
    }
  },
  watch: {
    datasets: {
      handler(newData) {
        this.chartData.datasets[0].data = newData;
      },
      deep: true
    },
    increase: {
      immediate: true,
      handler(newValue) {
        this.updateColors(newValue);
      }
    }
  }
}
</script>
