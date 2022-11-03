<template>
<div>
	<h1>home</h1>
	<p>{{UsuarioStore.userData?.email}}</p>
	<div v-if="DataBase.loadingDoc"> Loading...</div>
	<ul v-else="">
		{{DataBase.documents}}
		<li v-for="item of DataBase.documents" :key="item.id">
			{{ item.name }} - {{item.short}}
		</li>
	</ul>
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

