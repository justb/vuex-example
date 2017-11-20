import axios from 'axios'
import cfg from '../../config/dev.json'
console.log(cfg)
export const addToCart = ({ commit }, product) => {
    axios.get(cfg.club.host + "/api/v1/games/" + 506 + "?app_key=" + cfg.club.app_key)
    .then(function (response) {
      console.log(response);
      commit("add", {
        id: 1
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    //   setTimeout(() => {
    //     commit("add", {
    //         id: 1
    //       })
    //   }, 1000);
  }