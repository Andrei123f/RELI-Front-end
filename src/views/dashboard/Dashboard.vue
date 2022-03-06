<template>
    <DashboardNavVue></DashboardNavVue>
</template>

<script>
import DashboardNavVue from "../../components/dashboard/DashboardNav.vue";
export default{
    data: () => {
        return{
            }
    },
    mounted(){
        console.log("logged in user? " + this.$store.getters['authStore/getLoginStatus']);
    },
    components: { DashboardNavVue }
}
</script>
<style>

</style>
