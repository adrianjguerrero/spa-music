<template>
  <div id="app">
    <cc-header></cc-header>
    <section class="section">
      <nav class="navbar has-shadow">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar canción" v-model="searchQuery">
          <a href="" class="button is-info is-large" @click.prevent="search">Buscar</a>
          <a href="" class="button is-danger is-large">&times;</a>
        </div>
      </nav>
      <small>{{searchResults}}</small>

      <cc-loader v-show="isLoading"></cc-loader>
      <div class="container results" v-show="!isLoading">
        <div class="columns is-multiline">
          <div  v-for="track in tracks" :key="track.id" class="column is-3">
            <cc-track :track="track"></cc-track>
          </div>
        </div>
      </div>
    </section>
    <cc-footer></cc-footer>
  </div>
</template>

<script>
import trackService from './services/track';
import CcHeader from './components/layout/Header.vue';
import CcFooter from './components/layout/Footer.vue';
import CcTrack from './components/layout/Track.vue';
import CcLoader from './components/shared/Loader.vue';
// la importacion es como queramos tal parece
// en cuanto al nombre, aqui estoy usando
// cccomponente (custoncomponent-componente)
// vue hace el proceso de llevarlo a kebab-case
// por nostros, entonces podemos decir
// CcComponente y luego <cc-componente>

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return; }
      this.isLoading = true;
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items;
          this.isLoading = false;
        })
    }
  },
  computed: {
    searchResults () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  components: {
    CcFooter,
    CcHeader,
    CcTrack,
    CcLoader
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.results{
  margin-top: 2em;
}
</style>
