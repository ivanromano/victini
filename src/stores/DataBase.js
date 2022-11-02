import { collection, doc, getDocs, query } from 'firebase/firestore/lite'
import { defineStore } from 'pinia'
import { db } from '../FirebaseConfig'

export const useDataBase = defineStore(`DataBase`, {
	state: () => ({
		documents: []
	}),
	actions: {
		async getUrls(){
			try {
				const q = query(collection(db, 'urls'))
				const querySnapshot = await getDocs(q)
				querySnapshot.forEach(doc => {
					console.log(doc.id, doc.data());
				});
			} catch (error) {

			}
		}
	}
})
