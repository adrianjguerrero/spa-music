// este actuara como un emisor de eventos entre componentes, esto pdado
// que vue no no spoermite comunicar componentes hermnaos
// o tios etc

const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue();
}

export default eventBus;

// lo de install es para instalarlo, declaramos un objeto devue como tal
// importaremos este plugin en el main
