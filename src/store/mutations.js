export const state = {
  count: 0
}

export const mutations = {
  add(state, {
    id
  }) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}
