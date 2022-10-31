<template>
	<div>
		<form @submit.prevent="HandleSumbit">
			<input type="email" placeholder="ingrese email" v-model.trim="email">
			<input type="password" placeholder="ingrese contraseña" v-model.trim="password">
			<button type="submit" :disabled="UsuarioStore.loading" :class="`${UsuarioStore.loading ? 'bg-red-400' : 'bg-red-200'}`">Crear Usuario</button>
		</form>
	</div>
</template>

<script setup>
import { useUsuarioStore } from '../stores/Usuario';
import { reactive, ref } from 'vue';

const UsuarioStore = useUsuarioStore()

const email = ref('poison@d.cm')
const password = ref('azsxdcfvgb')

const HandleSumbit = async() => {
	if (!email.value || !password.value) {
		return alert('no')
	}
	console.log('esta funciondando' + email.value + password.value);
	await UsuarioStore.RegistroUsuario(email.value, password.value)
}
</script>

<style lang="scss" scoped>

</style>
