<template>
    <div ref="firebaseui-auth-container" id="firebaseui-auth-container"></div>
</template>

<script>
import { auth } from "@/firebase"
import firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
export default {
    mounted () {
        const uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
            ]
        }

        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
        ui.start('#firebaseui-auth-container', uiConfig)
    }
}
</script>
