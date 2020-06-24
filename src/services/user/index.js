import VueXstate from '../VueXstate'
import { userStateMachine } from './userStateMachine'
import { auth } from "@/firebase"
import * as firebaseui from 'firebaseui'
export default {
    install (Vue) {
        // set $user as a global user VueXstate service instance
        const $user = Vue.prototype.$user = window.$user = new VueXstate(userStateMachine)
        $user.service.start()
        $user.ui = new firebaseui.auth.AuthUI(auth)
    }
}