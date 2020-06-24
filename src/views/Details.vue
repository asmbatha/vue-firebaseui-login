<template>
    <div class="details-screen">
        <div class="navbar">
            <AppName class="app-name" />
            <button @click="$user.service.send('SIGNOUT')">
                Logout
            </button>
        </div>
        <div class="body">
            <UserCard />
        </div>
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
        .navbar {
            display: flex;
            justify-content: space-between;
            padding: 6px 24px;
            .app-name {
                display: block;
                padding: 12px 24px;
            }
            
            button {
                background: #dfdfdf;
                border: 1px solid #CfC5C8;
                border-radius: 4px;
                display: inline-block;
                height: 34px;
                width: 66px;
            }
        }
        .body {
            padding: 24px;
        }
    }
</style>
