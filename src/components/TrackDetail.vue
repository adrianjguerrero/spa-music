<template>
<div class="containers">
    <cc-loader v-show="isLoading"></cc-loader>
    <div class="columns" v-if="track && track.album">
        <div class="column is-3 has-text-centered">
          <figure class="media-left">
            <p class="image">
              <img :src="track.album.images[0].url" alt="album image">
            </p>
            <p>
              <button class="button is-primary is-large">
                <span class="icon" @click="selectedTrack">&#9658;</span>
              </button>
            </p>
          </figure>
        </div>
        <div class="column is-8">
          <div class="panel">
            <div class="panel-heading">
              <h1 class="title">{{track.name}}</h1>
            </div>
            <div class="panel-block">
              <article class="media">
                <div class="media-cotent">
                  <div class="content">
                    <h2>Artistas:</h2>
                    <ul>
                      <li v-for="(value, index) in track.artists" :key="index">
                        <strong>{{index + 1}}: <span>{{value.name}}</span></strong>
                      </li>
                    </ul>
                  </div>
                  <nav class="level">
                    <div class="level-left">
                      <a href="" class="level-item"></a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import trackService from '@/services/track';
import trackMixin from '@/mixins/track';
import CcLoader from '@/components/shared/Loader.vue'
export default {
  components: {
    CcLoader
  },
  mixins: [trackMixin],
  data () {
    return {
      track: {},
      isLoading: true
    }
  },
  created () {
    const id = this.$route.params.id;
    this.isLoading = true;
    trackService.getById(id)
      .then(res => {
        this.track = res
        this.isLoading = false;
      });
  }

}
</script>
