const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let algorithmSchema = new Schema({
	algorithm_title: {
		type: String
	},
	algorithm_description: {
		type: String
	},
	algorithm_code: {
		type: String
	}
});

module.exports = mongoose.model('algorithm', algorithmSchema);