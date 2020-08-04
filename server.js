const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
//const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/algorithms';

const algorithmRoutes = require('./algorithmRoutes');

app.use(bodyParser.json());
const corsOptions = {
  origin: ['https://csbasics.herokuapp.com'],
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://MikeLi:password123@heroku-j4d5chrp.neah3.mongodb.net/heroku_j4d5chrp?retryWrites=true&w=majority');

app.get('/', (req,res) => res.send(`<h1>csBasics server is running...</h1>`));

app.use('/algorithms', algorithmRoutes);

app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);
});