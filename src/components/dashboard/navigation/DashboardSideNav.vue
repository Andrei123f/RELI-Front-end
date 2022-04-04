<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    v-bind:class="{ toggled: isToggled }"
    id="accordionSidebar"
    style="transition: all 0.3s Ease-out"
  >
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center">
      <router-link to="/dashboard">
        <div class="sidebar-brand-icon">
          <img src="../../../../public/cosmin_try.png" width="65" height="65" />
        </div>
      </router-link>
      <router-link
        to="/dashboard"
        style="
          color: white;
          text-transform: none;
          margin-top: 15px;
          margin-right: 15px;
          text-decoration: none;
        "
      >
        <div class="sidebar-brand-text mx-3">Renderlingo</div>
      </router-link>
    </a>

    <!-- Divider -->

    <!-- Nav Item - Dashboard -->
    <li
      class="nav-item"
      v-bind:class="{ active: this.$route.name == 'Dashboard/stats' }"
    >
      <router-link class="nav-link" to="/dashboard">
        <i class="fa fa-chart-bar"></i><span>Dashboard</span>
      </router-link>
    </li>

    <!-- Nav Item - Challenge solver -->
    <li
      class="nav-item"
      v-bind:class="{
        active: this.$route.name == 'Dashboard/challenge/progress',
      }"
    >
      <router-link class="nav-link" to="/challenge/progress">
        <i class="fas fa-road"></i>
        <span>Challenges Roadmap</span>
      </router-link>
    </li>

    <!-- Divider -->

    <!-- Nav Item - Achievements  FOR NOW DISABLED. TODO IMPLEMENT ACHIEVEMENTS FUNC-->
    <!--
    <li
      class="nav-item"
      v-bind:class="{ active: this.$route.name == 'Dashboard/challenge/track' }"
    >
      <a class="nav-link">
        <i class="fas fa-award"></i>
        <span>Achievements</span>
      </a>
    </li>
    -->

    <!-- Nav Item - Challenge solver -->
    <li
      class="nav-item"
      v-bind:class="{ active: this.$route.name == 'Dashboard/challenge/solve' }"
    >
      <router-link class="nav-link" to="/challenge/solve">
        <i class="fas fa-book-reader"></i>
        <span>Solve a new challenge</span>
      </router-link>
    </li>

    <!-- Divider -->
    <div class="text-right d-none d-md-inline">
      <button
        class="rounded-circle border-0"
        id="sidebarToggle"
        @click.prevent="() => (isToggled = !isToggled)"
      ></button>
    </div>
  </ul>
</template>


<script>
export default {
  setup() {},
  data: () => {
    return {
      isToggled: false,
    };
  },
};
</script>
<style scoped>
.nav-item {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 10px;
}
</style>