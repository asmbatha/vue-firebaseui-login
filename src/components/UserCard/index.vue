<template>
    <div class="user-card" v-if="user">
        <div class="card-image" v-if="user.photoURL"><img :src="user.photoURL" /></div>
        <div class="card-details">
            <div class="item"><span class="label">name:</span> <strong>{{user.displayName}}</strong></div>
            <div class="item"><span class="label">email:</span> <strong>{{user.email}}</strong></div>
            <div class="item"><span class="label">uid:</span> <strong>{{user.uid}}</strong></div>
            <div class="item"><span class="label">provider:</span> <strong class="teal-text">{{providerId}}</strong></div>
        </div>
    </div>
</template>

<script>
import {auth} from '@/firebase'
export default {
    name: 'UserCard',
    computed: {
        user () {
            return this.$user.state.context.user
        },
        providerId () {
            return this.user.providerData[0]?.providerId
        }
    }
}
</script>
<style lang="scss" scoped>
    .user-card {
        display: flex;
        flex-direction: column;
        box-shadow: 
            -6px -6px 26px 0 rgba(255, 255, 255, 0.83),
            6px 6px 16px 0 rgba(184, 184, 184, 0.5);
        background: #EFEEEE;
        border-radius: 12px;
        border: 1px solid #f0f0f0;
        max-width: 400px;
        min-height: 160px;
        margin: auto;
        padding: 16px;
        .card-image {

            overflow: hidden;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #EFEEEE;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                box-shadow: inset -3px -3px 3px 0 rgba(255, 255, 255, 0.53), inset 3px 3px 6px 0 rgba(104, 104, 104, 0.3);
            }

            img {
                max-width: 100%;
            }
        }
        .card-details {
            flex: 1;
            display: flex;
            flex-direction: column;
            color: #333;
            justify-content: center;
            padding: 12px 0;
            .label {
                display: inline-block;
                width: 60px;
            }
        }
    }
</style>