import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './modules/router'

createApp(App).use(router).mount('#app')
