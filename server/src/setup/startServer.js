// App Imports

import models from '../models/index'
import config from '../config/config.json'

export default function (server) {
	console.info("SETUP - Synchronizing database tables...");

	// Crear tablas
	models.sequelize.sync({}).then(() => {
		console.info("INFO  - Database synced successfully.");

		console.info('SETUP - Server starting...')
        // Inciar Servidor web
        server.listen({ port: config.port,bodyParserOptions: { limit: "10mb", type: "application/json" } }, (error) => {
            if (error) {
				console.error('ERROR - Unable to start server.' + error)
			} else {
                console.info(`INFO  - Apollo Server running in port ${ config.port }.`)
			}
        });
	})
	.catch((error) => {
		console.error('ERROR - Unable to start database.')
		console.error('ERROR - Server stop.' + error)
	})
}
