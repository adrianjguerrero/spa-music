<template>
  <main>
    <transition name="move">
      <cc-notification v-show="showNotificacion" :type="typeNotification">
        <p slot="body">{{mesaggeNotification}}</p>
      </cc-notification>
    </transition>
    <cc-loader v-show="isLoading"></cc-loader>
    <section class="section"  v-show="!isLoading">
      <nav class="navbar has-shadow">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar canción" v-model="searchQuery" @keyup.enter="search">
          <a href="" class="button is-info is-large" @click.prevent="search">Buscar</a>
          <a href="" class="button is-danger is-large">&times;</a>
        </div>
      </nav>
      <small>{{searchResults}}</small>
      <div class="container results">
        <div class="columns is-multiline">
          <div  v-for="track in tracks" :key="track.id" class="column is-3">
            <cc-track :class="{'is-active' : track.id === selectedTrack}" :track="track" @select="setSelectedTrack" v-blur="track.preview_url"></cc-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track';

import CcTrack from '@/components/Track.vue';

import CcLoader from '@/components/shared/Loader.vue';
import CcNotification from '@/components/shared/Notification.vue';
// la importacion es como queramos tal parece
// en cuanto al nombre, aqui estoy usando
// cccomponente (custoncomponent-componente)
// vue hace el proceso de llevarlo a kebab-case
// por nostros, entonces podemos decir
// CcComponente y luego <cc-componente>

export default {
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotificacion: false,
      mesaggeNotification: '',
      typeNotification: 'is-success'
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return; }
      this.isLoading = true;
      trackService.search(this.searchQuery)
        .then(res => {
          let message, type
          this.showNotificacion = true;
          if (res.tracks.total) {
            message = `Cantidad de Resultados: ${res.tracks.total}`
            type = 'is-info'
          } else {
            message = 'No se encontraron resultados'
            type = 'is-danger'
          }
          this.updateNotification(message, type);
          this.tracks = res.tracks.items;
          this.isLoading = false;
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id;
    },
    updateNotification (message, type) {
      this.mesaggeNotification = message
      this.typeNotification = type
      this.showNotification = true
    }
  },
  computed: {
    searchResults () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotificacion () {
      if (this.showNotificacion) {
        setTimeout(() => {
          this.showNotificacion = false;
        }, 3000);
      }
    }
  },
  components: {
    CcTrack,
    CcLoader,
    CcNotification
  }
}
</script>

<style lang="scss">
.results{
  margin-top: 2em;
}

.is-active{
  border: 1px solid #10d3c3;
}
</style>
