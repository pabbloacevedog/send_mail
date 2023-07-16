// Imports
import {GraphQLBoolean, GraphQLObjectType, GraphQLString} from 'graphql'

// User Login type
const MailType = new GraphQLObjectType({
	name: "Mail",
	description: "send mail ",

	fields: () => ({
		email: {
			type: GraphQLString,
		},
		name: {
			type: GraphQLString,
		},
		wallet: {
			type: GraphQLString,
		},
		instagram: {
			type: GraphQLString,
		},
		facebook: {
			type: GraphQLString,
		},
		img: {
			type: GraphQLString,
		},
		close_relative: {
			type: GraphQLString,
		},
		city: {
			type: GraphQLString,
		},
		country: {
			type: GraphQLString,
		},
		whatsapp: {
			type: GraphQLString,
		},
		phone: {
			type: GraphQLString,
		},
		password: {
			type: GraphQLString,
		},
		send: {
			type: GraphQLBoolean,
		},
	}),
});

export default MailType
