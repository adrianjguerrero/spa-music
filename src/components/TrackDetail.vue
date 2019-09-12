<template>
<div class="containers">
    <cc-loader v-show="isLoading"></cc-loader>
    <div class="colums">
        <div class="column is-4 is-offset-4">
            <cc-track :track="track"></cc-track>
        </div>
    </div>
</div>
</template>

<script>
import trackService from '@/services/track';
import CcTrack from '@/components/Track.vue'
import CcLoader from '@/components/shared/Loader.vue'
export default {
  components: {
    CcTrack,
    CcLoader
  },
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
