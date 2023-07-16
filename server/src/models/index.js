// Imports
import Sequelize from 'sequelize'

// App Imports
import connection from '../setup/databaseConnection.js'
import Mail       from './Mail/index.js'

const models = {
	Mail          :   Mail(connection),
}

Object.keys(models).forEach((modelName) => {
	if ('associate' in models[modelName]) {
		models[modelName].associate(models)
	}
})

models.sequelize = connection
models.Sequelize = Sequelize

export default models
