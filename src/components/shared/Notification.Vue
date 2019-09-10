<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4">
                <div class="notification is-danger">
                    <slot name="body">Algo salio mal</slot>
                    <!-- los slost se usan para insertar html -->
                </div>
            </div>
        </div>
    </div>
</template>