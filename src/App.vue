<template>
  <nav v-if="!UsuarioStore.loadingNav">
    <RouterLink to="/register" >Register </RouterLink>
    <RouterLink to="/login">Login </RouterLink>
    <RouterLink to="/home" v-if="UsuarioStore.userData">Home </RouterLink>
  </nav>
  <nav v-else>
    Loading...
  </nav>
  <button @click="UsuarioStore.CerrarSesion">cerrar sesion</button>
  <RouterView></RouterView>

</template>

<script setup>
import { useUsuarioStore } from "./stores/Usuario";

const UsuarioStore = useUsuarioStore()
</script>

<style lang="scss" scoped>

</style>
