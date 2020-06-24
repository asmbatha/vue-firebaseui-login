<template>
    <div ref="firebaseui-auth-container" id="firebaseui-auth-container"></div>
</template>

<script>
import { auth } from "@/firebase"
import firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
export default {
    data () {
        return {
            start: false
        }
    },
    mounted () {
        try {
            var uiConfig = {
                signInSuccessUrl: '/',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                ]
            }
            
            this.$user.ui.start('#firebaseui-auth-container', uiConfig);
        } catch (e) {
            console.error('error found here', e)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>