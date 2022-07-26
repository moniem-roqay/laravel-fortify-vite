import { createStore } from "vuex";
import auth from "@/stores/auth.module";

const store = createStore({
  modules: {
    auth,
  }
});

export default store;
