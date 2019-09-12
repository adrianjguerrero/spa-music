<template>
  <div id="app">
    <cc-header></cc-header>
    <router-view></router-view>
    <cc-footer></cc-footer>
  </div>
</template>

<script>
import CcHeader from '@/components/layout/Header.vue';
import CcFooter from '@/components/layout/Footer.vue';
// la importacion es como queramos tal parece
// en cuanto al nombre, aqui estoy usando
// cccomponente (custoncomponent-componente)
// vue hace el proceso de llevarlo a kebab-case
// por nostros, entonces podemos decir
// CcComponente y luego <cc-componente>

export default {
  name: 'app',
  components: {
    CcFooter,
    CcHeader
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
}
</style>
