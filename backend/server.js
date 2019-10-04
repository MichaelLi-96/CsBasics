const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const algorithmRoutes = express.Router();
const PORT = process.env.PORT || 4000;

let Algorithm = require('./algorithm.model');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/algorithms', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log("connection error:", err);
    } else {
        console.log("MongoDB connection successful");
    }
});

const connection = mongoose.connection;

connection.once('open', function() {
	console.log("MongoDB database connection established successfully");
})

// GET: Retrieve the list of algorithms
algorithmRoutes.route('/').get(function(req, res) {
	Algorithm.find(function(err, algorithm) {
		if(err) {
			console.log(err);
		}
		else {
			res.json(algorithm);
		}
	});
});

// GET: Retrieve one specific algorithm based on id
algorithmRoutes.route('/:id').get(function(req, res) {
	let id = req.params.id;
	Algorithm.findById(id, function(err, algorithm) {
		res.json(algorithm);
	})
})

// POST: Add an algorithm to the database
algorithmRoutes.route('/add').post(function(req, res) {
	let algorithm = new Algorithm(req.body);
	algorithm.save()
		.then(algorithm => {
			res.status(200).json({'algorithm': 'algorithm added successfully'})
		})
		.catch(err => {
			res.status(400).send('adding new algorithm failed');
		})
})

// PUT: Modify information of an specific algorithm based on id
algorithmRoutes.route('/update/:id').put(function(req, res) {
	Algorithm.findById(req.params.id, function(err, algorithm) {
		if(!algorithm) {
			res.status(404).send('data is not found');
		}
		else {
			algorithm.algorithm_title = req.body.algorithm_title;
			algorithm.algorithm_description = req.body.algorithm_description;
			algorithm.algorithm_tags = req.body.algorithm_tags;
			algorithm.algorithm_code = req.body.algorithm_code;

			algorithm.save()
				.then(algorithm => {
					res.json('Algorithm updated');
				})
				.catch(err => {
					res.status(400).send('Update not possible');
				})
		}
	})
})

app.use('/algorithms', algorithmRoutes);

app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);
});
