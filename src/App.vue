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

      <div class="container results">
        <div class="columns is-multiline">
          <div v-for="track in tracks" class="is-12 column">
            <!-- {{track.name}} - {{track.artists[0].name}} -->
            <cc-track track="t"></cc-track>
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
      tracks: []
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return; }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items;
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
    CcTrack
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
