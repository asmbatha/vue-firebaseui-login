import Vue from 'vue'
import VueXstate from '../VueXstate'
import { userStateMachine } from './userStateMachine'

const $user = window.$user = new VueXstate(userStateMachine)

Vue.use({
    install (Vue) {
        Vue.prototype.$user = $user
    }
})

export default $user