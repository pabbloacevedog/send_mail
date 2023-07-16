import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import Mail from './mail'

Vue.use(Vuex)
const vuexLocalStorage = new VuexPersist({
	key: 'session', // The key to store the state on in the storage provider.
	storage: window.sessionStorage, // or window.sessionStorage or localForage
	reducer: state => ({
	}),
  })
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
		plugins: [vuexLocalStorage.plugin],
		modules: {
			Mail: Mail,
		},
		state: {
		},
		mutations: {
		},
		actions: {
		},
		strict: false
	})

  return Store
}
