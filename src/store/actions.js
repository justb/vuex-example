import axios from 'axios'

export const addToCart = ({ commit }, product) => {
      setTimeout(() => {
        commit("add", {
            id: 1
          })
      }, 1000);
  }