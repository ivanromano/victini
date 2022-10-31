<template>
	<div>
		<h1>home</h1>
		<p>{{UsuarioStore.userData?.email}}</p>
	</div>
</template>

<script setup>
import { useUsuarioStore } from "../stores/Usuario";

const UsuarioStore = useUsuarioStore()
</script>

<style lang="scss" scoped>

</style>
