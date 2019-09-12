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
              <small>{{track.duration_ms | ms-to-mm}}</small>
              <nav class="level"></nav>
              <div class="level-left">
                  <button class="level-item button is-primary">
                      <span class="icon is-small" @click="selectedTrack">&#9658;</span>
                  </button>
                <button class="leve-item button is-link">
                      <span class="icon" @click="goToTrack(track.id)">ver mas</span>
                </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track';

export default {
  mixins: [trackMixin],
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToTrack (id) {
      this.$router.push({ name: 'track', params: { id } });
      // nos referimos a la ruta por el name
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: center;

    .level-left{
      width: 80%;
      .is-link{
        flex-grow: 1;
      }
    }
}
</style>
