<template>
    <div class="container">
        <div class="columns">
            <div class="column is-5 is-offset-4">
                <div class="notification" :class="type">
                    <slot name="body">Algo salio mal</slot>
                    <!-- los slost se usan para insertar html -->
                    <!-- el valor q definimos aqui es un default
                    por si nodefinimos nada en el padre -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    type: {
      type: String,
      default: 'is-danger'
    }
  }
}
</script>

<style lang="scss" scoped>
.notifcation{
    margin: 10px;
}
</style>
