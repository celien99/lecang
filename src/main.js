import './assets/main.css'
import ScrollReveal from './directives/ScrollReveal'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TopBanner from './components/TopBanner.vue'
const app = createApp(App)
app.component('top-banner', TopBanner)
app.use(router)
app.directive('scroll-reveal', ScrollReveal)
app.mount('#app')
