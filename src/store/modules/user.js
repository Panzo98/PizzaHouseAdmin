const state = {
  loggedIn: false,
  user: {},
};

const getters = {
  user: (state) => state,
};

const actions = {
  setUser({ commit }, payload) {
    commit("setUser", payload);
  },
  logoutUser({ commit }) {
    commit("logoutUser");
  },
};

const mutations = {
  setUser: (state, user) => {
    state.loggedIn = true;
    state.user = user;
  },

  logoutUser: (state) => {
    state.loggedIn = false;
    state.user = {};
    localStorage.removeItem("token");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
