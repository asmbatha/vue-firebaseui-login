<template>
    <div class="details-screen">
        <AppName class="app-name" />
        <UserCard />
    </div>
</template>
<script>
import AppName from '@/components/AppName'
import UserCard from '@/components/UserCard'
export default {
    name: 'Details',
    components: {
        AppName,
        UserCard
    },
    watch: {
        '$user.state.value': {
            immediate: true,
            handler (state) {
                console.log('Details::state', state)
                switch (state) {
                    case 'no_user':
                        this.$router.push("/")
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
    .details-screen {
        .app-name {
            display: block;
            padding: 12px 24px;
        }
    }
</style>
