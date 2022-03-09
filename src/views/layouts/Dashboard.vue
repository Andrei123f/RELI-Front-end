<template>
<div id="wrapper">
    <DashboardSideNav></DashboardSideNav>
    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <DashboardTopNavVue></DashboardTopNavVue>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import DashboardSideNav from "../../components/dashboard/navigation/DashboardSideNav.vue";
import DashboardTopNavVue from "../../components/dashboard/navigation/DashboardTopNav.vue";
export default{
    data: () => {
        return{
            }
    },
    mounted(){
        console.log("logged in user? " + this.$store.getters['authStore/getLoginStatus']);
    },
    components: { DashboardSideNav, DashboardTopNavVue }
}
</script>
<style>

</style>
