export const state = () => {
  return {
    users: [],
  }
}

export const getters = {}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await this.$axios.get(
        'http://jsonplaceholder.typicode.com/users'
      )
      // ここの2行の呼び出し方が今までと違う
      // create() 直書きの時 >> this.users = response.data
      const users = response.data
      // mutaionsを呼び出している
      commit('setUsers', users)
    } catch (err) {
      const res = err.response
      alert(`${res.statusText} ${res.status}`)
    }
  },
}
