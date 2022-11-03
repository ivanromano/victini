import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { defineStore } from 'pinia'
import { db } from '../FirebaseConfig'
import { auth } from '../FirebaseConfig'

export const useDataBase = defineStore("DataBase", {
	state: () => ({
		documents: [],
		loadingDoc: false,
	}),
	actions: {
		async getUrls() {
			this.loadingDoc = true;
			// a veces se pone medio tonto y se olvida de quitar los documentos anteriores, asi que pongo esto
			if (this.documents.length !== 0) {
				return;
			}

			try {
				const q = query(collection(db, "urls"), where("user", "==", auth.currentUser.uid))
				const querySnapshot = await getDocs(q)
				querySnapshot.forEach((doc) => {
					console.log(doc.id, doc.data());
					this.documents.push({
						id: doc.id,
						...doc.data()
					})
				});
			} catch (error) {
				console.log(error);
			} finally {
				this.loadingDoc = false;
			}
		}
	}
})
