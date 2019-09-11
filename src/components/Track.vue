<template>
  <div class="card" v-if="track && track.album">
      <div class="card-image">
          <figure class="image is-1by1">
              <img :src="track.album.images[0].url" alt="album image">
          </figure>
      </div>
      <div class="card-content">
          <div class="media">
              <div class="media-left">
                  <figure class="image is-48x48">
                      <img :src="track.album.images[0].url" alt="album image">
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-6">
                      <strong>{{track.name}}</strong>
                  </p>
                  <p class="subtitle is-6">{{track.artists[0].name}}</p>
              </div>
          </div>
          <div class="content">
              <small>{{track.duration_ms}}</small>
              <nav class="level"></nav>
              <div class="level-left">
                  <a href="" class="level-item">
                      <span class="icon is-small" @click.prevent="selectedTrack">&#9658;</span>
                  </a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true
    }
  },
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
</script>

<style>

</style>
