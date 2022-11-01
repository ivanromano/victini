import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { auth,  } from "../FirebaseConfig";

import router from '../router';

export const useUsuarioStore = defineStore(`UsuarioStore`, {
	state: () => ({
		userData: null,
		loading: false,
		loadingNav: true
	}),
	actions: {
		async RegistroUsuario(email, password) {
			try {
				this.loading = true
				const {user} = await createUserWithEmailAndPassword(auth, email, password)
				// actualizar el estado
				this.userData = {email: user.email, uid: user.uid}
				console.log(user);
				router.push("/home")
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false
			}
		},
		async LoginUsuario(email, password) {
			try {
				this.loading = true
				const {user} = await signInWithEmailAndPassword(auth, email, password)
				// actualizar el estado
				this.userData = {email: user.email, uid: user.uid}
				console.log(user);
				router.push("/home")
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false
			}
		},
		async CerrarSesion() {
			try {
				this.loading = true
				await signOut(auth)
				this.userData = null
				router.push("/login")
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false
			}
		},
		// validacion de ruta
		async CurrentUser(){
			return new Promise((resolve, reject) => {
				const unsuscribe = onAuthStateChanged(auth, (user) => {
					if (user) {
						this.userData = {email: user.email, uid: user.uid}
					} else {
						this.userData = null
					}
					resolve(user)
				}, (e) => reject(e))
				unsuscribe()
			})
		},
	}
	// el getter es como un computed, pero global

	// getters: {
	// 	UsuarioEnMinuscula(state) {
	// 		return state.userData.toLocaleLowerCase( )
	// 	}
	// },
	// el action es un getter pero la modificacion es permanente
	// actions: {
	//  userData es igual al nombre del usuario. modifica todo el usuario
	// 	RegistroUsuario(name) {
	// 		this.userData = name
	// 	}
	// },
})
