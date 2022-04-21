import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GStore from "@/services/EventReactive.js"
import "nprogress/nprogress.css"

createApp(App).use(store).use(router).provide("GStore", GStore).mount('#app')
