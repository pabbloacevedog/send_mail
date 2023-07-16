// User
import seq from 'sequelize';
const { Model } = seq;
const schema = {
	email: {
		type: seq.STRING(1000),
		primaryKey: true,
	},
	name: {
		type: seq.STRING(500),
	},
	wallet: {
		type: seq.STRING(1000),
	},
	instagram: {
		type: seq.STRING(1000),
	},
	facebook: {
		type: seq.STRING(1000),
	},
	img: {
		type: seq.STRING(5000),
	},
	close_relative: {
		type: seq.STRING(500),
	},
	relationship: {
		type: seq.STRING(500),
	},
	city: {
		type: seq.STRING(500),
	},
	country: {
		type: seq.STRING(500),
	},
	whatsapp: {
		type: seq.STRING(500),
	},
	phone: {
		type: seq.STRING(500),
	},
	password: {
		type: seq.STRING(500),
	},
};
export default (sequelize) => {
	class Mail extends Model {
		static associate() {
		}
	}
	Mail.init(schema, {
        timestamps: true,
        tableName: 'Mail',
        sequelize,
	});
	return Mail;
};

