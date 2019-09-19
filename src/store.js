import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    track: {}
  },
  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  }
});

/* este archivo es para usar vuex
 * state, propiedades que usaremos
 * mutations, cosas q manupularan el estado
 */

export default store;
