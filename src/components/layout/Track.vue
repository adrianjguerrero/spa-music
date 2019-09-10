<template>
  <div class="card">
      <div class="card-image">
          <figure class="image is-1by1">
              <img src="" alt="">
          </figure>
      </div>
      <div class="card-content">
          <div class="media">
              <div class="media-left">
                  <figure>
                      <div class="image is-48x48"></div>
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-6">
                      <strong></strong>
                  </p>
                  <p class="subtitle is-6"></p>
              </div>
          </div>
          <div class="content">
              <small></small>
              <nav class="level"></nav>
              <div class="level-left">
                  <a href="" class="level-item">
                      <span class="icon is-small">&#9658;</span>
                  </a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        track: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>