import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js' 
import './assets/css/index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'

const app = createApp(App)

app.use(router)
app.use(VueSmoothScroll, { duration: 500, updateHistory: false })
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      prefix: 'p',
      darkModeSelector: 'none',
      cssLayer: false
    }
  }
})

app.mount('#app')