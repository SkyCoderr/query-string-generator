import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colors: {
      coverage: "include",
      colors: {
        red: false,
        green: false,
        blue: false,
        yellow: false,
        orange: false,
        purple: false,
        white: false,
        black: false,
        grey: false,
        pink: false,
      },
    },
    speed: {
      speedRange: "lt",
      speedValue: "",
    },
    dom: {
      domRange: "on",
      domValue: "1980-01-01",
    },
    laser: {
      laserRange: "with",
    },
  },
  mutations: {
    setColors(state, colors) {
      Vue.set(state, "colors", colors);
    },
    setSpeed(state, speed) {
      Vue.set(state, "speed", speed);
    },
    setDom(state, dom) {
      Vue.set(state, "dom", dom);
    },
    setLaser(state, laser) {
      Vue.set(state, "laser", laser);
    },
  },
  actions: {
    updateColors({ commit }, colors) {
      commit("setColors", colors);
    },
    updateSpeed({ commit }, speed) {
      commit("setSpeed", speed);
    },
    updateDom({ commit }, dom) {
      commit("setDom", dom);
    },
    updateLaser({ commit }, laser) {
      commit("setLaser", laser);
    },
  },
});
