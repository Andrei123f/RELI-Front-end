import { createStore } from "vuex";
import authStore from "./authStore";
import dashboardStore from "./dashboardStore";
import challengeStore from "./challengeStore";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({
  isCompression: false,
});
// Create a new store instance.
const store = createStore({
  modules: {
    authStore,
    dashboardStore,
    challengeStore,
  },
  plugins: [
    createPersistedState({
      key: "renderlingo",
      paths: ["authStore", "dashboardStore", "challengeStore"],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});

export default store;
