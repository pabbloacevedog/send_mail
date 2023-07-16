import { MAIL_QUERY } from "./queries";
const state = {

	error: null,
	sendMail: false,
};
const actions = {
	async mail({ commit }, data) {

		commit("MAIL");
		await this.$apollo.defaultClient
			.query({
				query: MAIL_QUERY,
				variables: data
			})
			.then(response => {
				const data = response.data.mail;
				commit("MAIL_SUCCESS", data);
			})
			.catch(response => {
				debugger;
				console.log('response', response)
				commit("MAIL_ERROR", response);
			});
	},
};

const mutations = {
	MAIL: (state) => {
		state.pending = true;
	},

	MAIL_SUCCESS: (state, data) => {
		state.sendMail = true;
	},

	MAIL_ERROR: (state, err) => {
		state.sendMail = false;
		state.error = err;
	},
};

const getters = {
	sendMail: (state) => {
		return state.sendMail;
	},
	error: (state) => {
		return state.error;
	},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
