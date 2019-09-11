<template>
<div class="containers">
    <div class="colums">
        <div class="column is-4 is-offset-4">
            <cc-track :track="track"></cc-track>
        </div>
    </div>
</div>
</template>

<script>
import trackService from './../services/track';
import CcTrack from './Track.vue'
export default {
    components: {
        CcTrack
    },
    data () {
        return {
            track: {}
        }
    },
    created () {
        const id = this.$route.params.id;
        trackService.getById(id)
         .then(res => this.track = res)
    }

}
</script>

<style>

</style>