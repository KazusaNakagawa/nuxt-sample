export const state = () => {
  return {
    sidebarVisible: false,
  }
}

export const mutations = {
  toggleSidebar(state) {
    // state のsidebarVisible が呼ばれる
    state.sidebarVisible = !state.sidebarVisible
  },
}

export const actions = {
  toggleSidebar({ commit }) {
    // mutaitionsのtoggleSidebarが呼ばれる
    commit('toggleSidebar')
  },
}
