// Imports
import { ApolloServer} from 'apollo-server-express'
// App Imports
import schema from '../schema'
// Ensure upload directory exists.

// Setup GraphQL
export default function (server) {
    console.info('SETUP - GraphQL...')
    const graphQLServer = new ApolloServer({
        schema,
        context: { },
    });
	graphQLServer.applyMiddleware({
		app: server,
		path: '/graphql',
		cors: {
			// origin: config.client,
			// credentials: true,
			methods: ['POST'],
			allowedHeaders: [
				'X-Requested-With',
				'X-HTTP-Method-Override',
				'Content-Type',
				'Accept',
				'Authorization',
				'Access-Control-Allow-Origin',
			],
        },
        bodyParserConfig: {
            limit:"50mb"
        }
    });
}
