import { createRouter, createWebHistory } from 'vue-router'
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Home from "./views/Home.vue";
import { useUsuarioStore } from "./stores/Usuario";

// a diferencia de las demas paginas, el usuariostore se pone dentro del requireAuth
const requireAuth = async(to, from, next) => {
	const UsuarioStore = useUsuarioStore()
	UsuarioStore.loadingNav = true
	const user = await UsuarioStore.CurrentUser()
	// si el usuario existe, que pase lo que tenga que pasar, sino, que vaya al login
	if (user) {
		next()
	} else {
		next("/login")
	}
	UsuarioStore.loadingNav = false
}

const routes = [
    {path: '/register', component: Register},
		{path: '/login', component: Login},
		{path: '/home', component: Home, beforeEnter: requireAuth},
    // {path: '/superiorhome', component: SuperiorHome, children: [{
    //     path: '/detalles/:id', component: Detalles
    // }]},
    // {path: '/detalles/:id', component: Detalles},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router
