
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCordova from 'vue-cordova'


createApp(App).use(router).use(VueCordova).use(store).mount('#app')
