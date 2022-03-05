import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';


// Create a new store instance.
const store = createStore({
    state () {
      return {
        isLoggedIn: false,
      }
    },
    mutations: {
      login(state) {
          state.isLoggedIn = true;
      },
      logout(state) {
          state.isLoggedIn = false;
      }
    },
    getters: {
        getLoginStatus(state){
            return state.isLoggedIn;
        }
    },
    plugins: [
        createPersistedState()
    ]
  })

export default store;