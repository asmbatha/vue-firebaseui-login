<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import {auth} from '@/firebase/'
export default {
    data () {
        return {
        }
    },
    components: {
    },
    mounted () {
    }
}
</script>