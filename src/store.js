import Vue from 'vue';
import Vuex from 'vuex';
import trackService from '@/services/track'

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    track: {}
  },
  getters: {
    trackTitle (state) {
      if (!state.track.name) {
        return '';
      }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },
  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  },
  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          context.commit('setTrack', res);
          // context representa el store, entonces aqui estamos haciendo llamado
          // a la function (mutation) setTrack
          // se 'comitean' porq asi se lleva un rastro
          return res;
        });
    }

  }
});

/* este archivo es para usar vuex
 * state, propiedades que usaremos
 * mutations, cosas q manupularan el estado
 * actions, para manejar codigo asincrono
 * puesto q uhhh vuex no suele esperar
 * por las mutations al renderizar, si manejan
 * la data, si se hace una peticion se renderizara
 * y no esperara la peticion, pero en los actions si
 */

export default store;
