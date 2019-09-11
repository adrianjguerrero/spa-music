<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
          <div class="navbar-brand">
            <div class="nav-item">
              <strong>App2Learn</strong>
            </div>
          </div>
          <div class="navbar-menu">
            <div class="nav-menu">
            </div>
          </div>
      </header>
    </div>
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title">App</h1>
            <h2>Vuena musica</h2>
        </div>
        <cc-player></cc-player>
    </div>
  </section>
</template>

<script>
import CcPlayer from './../Player.vue';
export default {
  components: {
    CcPlayer
  }
}
</script>
