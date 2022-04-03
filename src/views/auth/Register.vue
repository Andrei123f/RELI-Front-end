<template>
  <section class="h-100">
    <div class="container h-100">
      <div class="row justify-content-sm-center h-100">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          <div class="text-center my-4">
            <img
              src="https://img.icons8.com/color/96/000000/edit-user-male--v1.png"
              alt="logo"
              width="100"
            />
          </div>
          <div class="card shadow-lg">
            <div class="card-body p-5">
              <h1 class="fs-4 card-title fw-bold mb-4">Register</h1>
              <form
                class="needs-validation"
                autocomplete="off"
                @submit.prevent="doRegister"
              >
                <div class="row mb-2">
                  <div class="col" style="width: 50%">
                    <label class="mb-2 text-muted" for="firstname"
                      >Firstname</label
                    >
                    <input
                      id="firstname"
                      type="text"
                      class="form-control"
                      v-model="firstname"
                      required
                      autofocus
                    />
                  </div>
                  <div class="col" style="width: 50%">
                    <label class="mb-2 text-muted" for="surname">Surname</label>
                    <input
                      id="surname"
                      type="text"
                      class="form-control"
                      v-model="surname"
                      required
                      autofocus
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="mb-2 text-muted" for="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    class="form-control"
                    v-model="username"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="mb-2 text-muted" for="email"
                    >Email Address</label
                  >
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="email"
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
                  <button class="btn btn-primary ms-auto">
                    <span v-if="!loading">Register</span>
                    <i v-if="loading" class="fas fa-spinner fa-pulse"></i>
                  </button>
                </div>
              </form>
            </div>
            <div class="card-footer py-3 border-0">
              <div class="text-center">
                Already have an account?
                <router-link to="/auth/login"> Log in</router-link>
              </div>
            </div>
          </div>
          <div class="text-center mt-5" style="color: white">
            Copyright &copy; 2021-2022 &mdash;
            <a
              href="https://github.com/Andrei123f"
              style="color: white; text-decoration: none"
              target="”_blank”"
              >Andrei123f <i class="fa fa-github"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
let API_URL = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      loading: false,
      firstname: "",
      surname: "",
    };
  },
  methods: {
    async doRegister() {
      try {
        this.email = this.email.replace(/ /g, "");
        this.password = this.password.replace(/ /g, "");
        if (this.email == "" || this.password == "") {
          this.emitter.emit("displayMessage", [
            "info",
            "Please enter the required values.",
          ]);
          return;
        }

        let payload = {
          firstname: this.firstname,
          surname: this.surname,
          email: this.email,
          password: this.password,
          username: this.username,
        };
        console.log(payload);
        this.loading = true;
        const response = await axios.post(API_URL + "user/register", payload);
        if (response.data) {
          const responseBody = response.data;
          if (responseBody.result === "SUCCESS") {
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