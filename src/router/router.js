import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import AboutUsView from '@/pages/AboutUs.vue'
import PrivacyPolicyView from '@/pages/Privacy.vue'
import TermsServiceView from '@/pages/Terms.vue'
import DocumentationView from '@/pages/Documentation.vue'

const routes = [
  { path: '/', name: 'Home', component: Index },
  { path: '/about', name: 'AboutUs', component: AboutUsView },
  { path: '/privacy', name: 'PrivacyPolicy', component: PrivacyPolicyView },
  { path: '/terms', name: 'TermsService', component: TermsServiceView },
  { path: '/documentation', name: 'Documentation', component: DocumentationView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router