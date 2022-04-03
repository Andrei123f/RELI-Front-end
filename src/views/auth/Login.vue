<template>
  <section class="h-100">
    <div class="container h-100">
      <div class="row justify-content-sm-center h-100">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          <div class="text-center my-4">
            <img
              src="https://img.icons8.com/external-flat-02-chattapat-/64/000000/external-access-social-media-flat-02-chattapat-.png"
              alt="logo"
              width="100"
            />
          </div>

          <div class="card shadow-lg">
            <div class="card-body p-5">
              <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
              <form
                class="needs-validation"
                autocomplete="off"
                @submit.prevent="doLogin"
              >
                <div class="mb-3">
                  <label class="mb-2 text-muted" for="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    class="form-control"
                    v-model="username"
                    required
                    autofocus
                  />
                </div>

                <div class="mb-3">
                  <div class="mb-2 w-100">
                    <label class="text-muted" for="password">Password</label>
                  </div>
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    v-model="password"
                    required
                  />
                </div>

                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      v-model="remember_me"
                      id="remember"
                      class="form-check-input"
                    />
                    <label for="remember" class="form-check-label"
                      >Remember Me</label
                    >
                  </div>
                  <button class="btn btn-primary ms-auto">
                    <span v-if="!loading">Login</span>
                    <i v-if="loading" class="fas fa-spinner fa-pulse"></i>
                  </button>
                </div>
              </form>
            </div>
            <div class="card-footer py-3 border-0">
              <div class="text-center">
                Don't have an account?
                <router-link to="/auth/register"> Create One</router-link>
              </div>
            </div>
          </div>
          <div class="text-center mt-5" style="color:white;">
            Copyright &copy; 2021-2022 &mdash;
            <a href="https://github.com/Andrei123f" target="”_blank”" 
              >Andrei123f <i class="fa fa-github"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { useCookies } from "vue3-cookies";
export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  mounted() {
  },
  data() {
    return {
      username: "",
      password: "",
      remember_me: false,
      loading: false,
    };
  },
  methods: {
    ...mapActions({
      signIn: "authStore/signIn",
    }),
    async doLogin() {
      try {
        this.username = this.username.replace(/ /g, "");
        this.password = this.password.replace(/ /g, "");
        if (this.username == "" || this.password == "") {
          this.emitter.emit("displayMessage", [
            "info",
            "Please enter the required values.",
          ]);
          return;
        }

        let payload = {
          username: this.username,
          password: this.password,
          remember_me: this.remember_me,
        };
        this.loading = true;

        const response = await this.signIn(payload);

        this.loading = false;
        if (response.data) {
          this.loading = false;
          const responseBody = response.data;
          if (responseBody.result === "SUCCESS") {
            this.$router.push({ name: "Dashboard" }).catch((err) => {});
            this.emitter.emit("displayMessage", [
              "success",
              `API submission succeded: ${responseBody.message}`,
            ]);
          } else {
            this.emitter.emit("displayMessage", [
              "error",
              ` API submission failed: ${responseBody.message}`,
            ]);
          }
        }
        this.loading = false;
      } catch (err) {
        console.log(err);
        this.loading = false;
        this.emitter.emit("displayMessage", [
          "error",
          `API submission failed. We cannot process your request right now.`,
        ]);
      }
    },
  },
};
</script>