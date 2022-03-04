import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import './styles/app.css'

createApp(App).use(router).use(VueAxios, axios).use(router).mount('#app')
