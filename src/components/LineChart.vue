<template>
  <div class="h-12 w-28 2xl:h-14 2xl:w-32 3xl:h-16 3xl:w-36 4xl:h-[72px] 4xl:w-40 5xl:h-20 5xl:w-44 6xl:h-[107px] 6xl:w-64">
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
    this.$nextTick(() => {
      this.setChart(this.$refs.lineChart.chart);
      
      // Add resize listener to handle responsive gradients
      window.addEventListener('resize', this.handleResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    getGradientHeight() {
      const width = window.innerWidth;
      if (width >= 2400) return 133;  // 6xl (updated)
      if (width >= 2100) return 80;   // 5xl
      if (width >= 1900) return 72;   // 4xl
      if (width >= 1800) return 64;   // 3xl
      if (width >= 1536) return 56;   // 2xl
      return 48; // default
    },
    handleResize() {
      if (this.$refs.lineChart && this.$refs.lineChart.chart) {
        this.setChart(this.$refs.lineChart.chart);
      }
    },
    setChart(chart) {
      const ctx = chart.ctx;
      const gradientHeight = this.getGradientHeight();
      
      this.gradient = ctx.createLinearGradient(0, 0, 0, gradientHeight);
      this.gradient.addColorStop(0.1119, 'rgba(95, 223, 146, 0.5)');
      this.gradient.addColorStop(0.1118, 'rgba(95, 223, 146, 0.3)');
      this.gradient.addColorStop(0.93, 'rgba(196, 196, 196, 0)');

      this.gradient2 = ctx.createLinearGradient(0, 0, 0, gradientHeight);
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