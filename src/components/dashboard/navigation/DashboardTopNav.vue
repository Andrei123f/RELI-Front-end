
<template>
  <nav
    class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    "
  >
    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{
            `Hi, ${userData.firstname} ${userData.surname}!`
          }}</span>
          <img
            class="img-profile rounded-circle"
            src="../../../../public/cosmin_try.png"
          />
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <router-link to="/user" style="text-decoration: none">
            <span class="dropdown-item" style="cursor: pointer">
              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </span>
          </router-link>

          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            @click="doLogout"
            data-toggle="modal"
            data-target="#logoutModal"
            style="cursor: pointer"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
import NotificationsVue from "./Notifications.vue";
import MessagesVue from "./Messages.vue";
import Notifications from "./Notifications.vue";
export default {
  data: () => {
    return {
      userData: {},
    };
  },
  mounted() {
    this.userData = this.$store.getters["authStore/getUserDetails"];
  },
  methods: {
    doLogout() {
      this.emitter.emit("logoutUser");
    },
  },
  components: { NotificationsVue, MessagesVue, Notifications },
};
</script>
