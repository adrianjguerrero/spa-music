<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
          <div class="navbar-brand">
            <div class="nav-item">
              <strong>App2Learn</strong>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-menu">
              <router-link class="nav-item nav-link" to="/">Buscar</router-link>
              <router-link class="nav-item nav-link" to="/about">Nosotros</router-link>
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

<style lang="scss" scoped>
.hero header.navbar{
  padding-top: 1.5em;
  padding-left: .5em;

  .navbar-end{
    .navbar-menu{
      
      .nav-link{
        margin-right: 1em;
        color: white;
      }

    }
    justify-content: space-around;
  }
}
</style>
