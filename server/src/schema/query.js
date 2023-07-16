// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as mail from "./mail/fields/query.js";
console.info(`INFO  - Cargando querys.`)
// Querys
const query = new GraphQLObjectType({
	name: 'query',
	description: '...',

	fields: () => ({
		...mail,
	})
})

export default query
