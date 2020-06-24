import Vue from 'vue'
import App from './App.vue'
import router from './router'
import userPlugin from '@/services/user'

Vue.config.productionTip = false
Vue.use(userPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
