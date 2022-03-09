
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
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>
    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Alerts -->
      <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="alertsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-bell fa-fw"></i>
          <!-- Counter - Alerts -->
          <span class="badge badge-danger badge-counter">3+</span>
        </a>
        <!-- Dropdown - Alerts -->
        <div
          class="
            dropdown-list dropdown-menu dropdown-menu-right
            shadow
            animated--grow-in
          "
          aria-labelledby="alertsDropdown"
        >
          <h6 class="dropdown-header">Alerts Center</h6>
          <Notifications v-for="(value, index) in [1, 2, 3, 4]" :key="index">
          </Notifications>

          <a class="dropdown-item text-center small text-gray-500" href="#"
            >Show All Notifications</a
          >
        </div>
      </li>

      <!-- Nav Item - Messages -->
      <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-envelope fa-fw"></i>
          <!-- Counter - Messages -->
          <span class="badge badge-danger badge-counter">7</span>
        </a>
        <!-- Dropdown - Messages -->
        <div
          class="
            dropdown-list dropdown-menu dropdown-menu-right
            shadow
            animated--grow-in
          "
          aria-labelledby="messagesDropdown"
        >
          <h6 class="dropdown-header">Message Center</h6>
          <MessagesVue
            v-for="(value, index) in [1, 2, 3, 4]"
            :key="index"
          ></MessagesVue>
          <a class="dropdown-item text-center small text-gray-500" href="#"
            >Read More Messages</a
          >
        </div>
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

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
          <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >{{`${userData.firstname} ${userData.surname}`}}</span
          >
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
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
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
    return{
      userData: {},
    }
  },
  mounted() {
    this.userData = {firstname: 'Andrei', surname: 'Popa'}; //TODO get from the API the firstname, lastname etc
  },
  components: { NotificationsVue, MessagesVue, Notifications },
};
</script>
