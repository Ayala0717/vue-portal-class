import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './modules/router'

//Icon
import 'iconify-icon'

createApp(App).use(router).mount('#app')
