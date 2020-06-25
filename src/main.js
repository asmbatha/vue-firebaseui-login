import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $user from '@/services/user'
$user.service.start()

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
