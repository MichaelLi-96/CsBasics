var express = require('express')
var router = express.Router();

let Algorithm = require('./algorithm.model');

// GET: Retrieve the list of algorithms
router.get('/', function(req, res) {
	Algorithm.find(function(err, algorithm) {
		if(err) {
			console.log(err);
		}
		else {
			res.json(algorithm);
		}
	});
})

// GET: Retrieve one specific algorithm based on id
router.get('/:id', (function(req, res) {
	let id = req.params.id;
	Algorithm.findById(id, function(err, algorithm) {
		res.json(algorithm);
	})
}))

// POST: Add an algorithm to the database
router.post('/add', function(req, res) {
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
router.put('/update/:id', function(req, res) {
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


module.exports = router;