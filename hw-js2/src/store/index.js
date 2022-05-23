import {
  createStore
} from 'vuex'
import {
  get
} from "@/components/requests";

export default createStore({
  state: {
    items: [],
    a: 1
  },
  getters: {
    GIVE_ITEMS: state => state.items
  },
  mutations: {
    SET_ITEMS: (state, payload) => {
      state.items = payload;
    }
  },
  actions: {
    GET_ITEMS: (context, url) => {
      get(url).then((data) => {
        context.commit("SET_ITEMS", data);
      });
    },
    CHANGE_ITEMS: (context, filtered) => {
      context.commit("SET_ITEMS", filtered);
    },
  },
  modules: {}
})