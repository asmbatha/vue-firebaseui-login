<template>
    <div class="home-screen">
        <progress v-if="$user.state.value === 'starting'" />
        <SignInForm v-show="$user.state.value === 'no_user'" />
        <AppName class="app-name" />
    </div>
</template>
<script>
import AppName from '@/components/AppName'
import SignInForm from '@/components/SignInForm'
export default {
    name: 'Home',
    components: {
        AppName,
        SignInForm
    },
    watch: {
        '$user.state.value': {
            immediate: true,
            handler (state) {
                switch (state) {
                    case 'authenticated':
                        this.$router.push("details")
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .home-screen {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        progress {
            width: calc(100% - 72px);
            max-width: 460px;
        }

        .app-name {
            font-size: 1.2rem;
            position: absolute;
            width: 100%;
            bottom: 12px;
            display: block;
            text-align: center;
        }
    }
</style>
