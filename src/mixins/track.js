const trackMixin = {
  methods: {
    selectedTrack () {
      if (!this.track.preview_url) { return; }

      this.$store.commit('setTrack', this.track);
    }
  }

}

// los mixin se usan para evitar repetir codigo
// o sea, si varios componentes usan mismos metodos,
// aqui podemos definirlos
// track y track loading usan estos 2, entonces q se compartan

export default trackMixin;
