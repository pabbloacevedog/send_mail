// Imports
import {GraphQLString} from 'graphql'

// App Imports
import MailType from '../type.js'
import { sendMail } from "../resolvers.js";

export const mail = {
	type: MailType,
	args: {
		email: {
			name: "",
			type: GraphQLString,
		},
		name: {
			name: "",
			type: GraphQLString,
		},
		wallet: {
			name: "",
			type: GraphQLString,
		},
		instagram: {
			name: "",
			type: GraphQLString,
		},
		facebook: {
			name: "",
			type: GraphQLString,
		},
		img: {
			name: "",
			type: GraphQLString,
		},
		close_relative: {
			name: "",
			type: GraphQLString,
		},
		relationship: {
			name: "",
			type: GraphQLString,
		},
		city: {
			name: "",
			type: GraphQLString,
		},
		country: {
			name: "",
			type: GraphQLString,
		},
		whatsapp: {
			name: "",
			type: GraphQLString,
		},
		phone: {
			name: "",
			type: GraphQLString,
		},
		password: {
			name: "",
			type: GraphQLString,
		},
	},
	resolve: sendMail,
};
