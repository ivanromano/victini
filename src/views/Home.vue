<template>
	<div>
		<h1>home</h1>
		<p>{{UsuarioStore.userData?.email}}</p>
		<p>{{DataBase.getUrls}}</p>
	</div>
</template>

<script setup>
import { useUsuarioStore } from "../stores/Usuario";
import { useDataBase } from "../stores/DataBase";

const UsuarioStore = useUsuarioStore()
const DataBase = useDataBase()

DataBase.getUrls()
</script>

<style lang="scss" scoped>

</style>
