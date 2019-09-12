const trackMixin = {
  methods: {
    selectedTrack () {
      this.$emit('select', this.track.id);
      this.$bus.$emit('set-track', this.track);
      // asi, ya que bus es una instanciacion de Vue,
      // puede usar los mismos eventos, por lo tanto
      // cualquiera q lo este escuchando, recibira estas cosas
    }
  }

}

// los mixin se usan para evitar repetir codigo
// o sea, si varios componentes usan mismos metodos,
// aqui podemos definirlos
// track y track loading usan estos 2, entonces q se compartan

export default trackMixin;
