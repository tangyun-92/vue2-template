const getDefaultState = () => {
  return {
    token: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  setToken({ commit }, token) {
    if (token) {
      commit('SET_TOKEN', token)
      localStorage.setItem(window._BASE_CONFIG.projectKey, token)
    }
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      localStorage.removeItem(window._BASE_CONFIG.projectKey)
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

