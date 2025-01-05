<template>
  <Line
    :data="chartData"
    :options="chartOptions"
    @chart:mounted="onChartMounted"
  />
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
            backgroundColor: 'rgba(95, 223, 146, 0.5)', // Default background
            data: this.datasets,
            fill: true,
            tension: 0.4
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
          }
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false
            }
          },
          x: {
            display: false,
            grid: {
              display: false,
              drawBorder: false
            }
          }
        }
      }
    }
  },
  methods: {
    onChartMounted(chart) {
      const ctx = chart.ctx
      
      // Create gradients
      this.gradient = ctx.createLinearGradient(0, 0, 0, chart.height)
      this.gradient.addColorStop(0.1119, 'rgba(95, 223, 146, 0.5)')
      this.gradient.addColorStop(0.1118, 'rgba(95, 223, 146, 0.3)')
      this.gradient.addColorStop(0.93, 'rgba(196, 196, 196, 0)')

      this.gradient2 = ctx.createLinearGradient(0, 0, 0, chart.height)
      this.gradient2.addColorStop(0, 'rgba(255, 189, 189, 0.5)')
      this.gradient2.addColorStop(0.94, 'rgba(196, 196, 196, 0)')

      // Update dataset with gradient
      this.chartData.datasets[0].backgroundColor = this.increase ? this.gradient : this.gradient2
      this.chartData.datasets[0].borderColor = this.increase ? '#28C165' : '#F4574D'
      
      // Update the chart
      chart.update()
    }
  },
  watch: {
    datasets: {
      handler(newData) {
        this.chartData.datasets[0].data = newData
      },
      deep: true
    },
    increase: {
      handler(newValue) {
        if (this.gradient && this.gradient2) {
          this.chartData.datasets[0].backgroundColor = newValue ? this.gradient : this.gradient2
          this.chartData.datasets[0].borderColor = newValue ? '#28C165' : '#F4574D'
        }
      }
    }
  }
}
</script>