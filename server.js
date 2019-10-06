const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
//const MONGODB_URL = process.env.MONGODB_URI;

const algorithmRoutes = require('./algorithmRoutes');

app.use(bodyParser.json());
const corsOptions = {
  origin: ['https://csbasics.herokuapp.com'],
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

mongoose.connect('mongodb://MikeLi:password123@ds329058.mlab.com:29058/heroku_j4d5chrp', { useNewUrlParser: true });

app.get('/', (req,res) => res.send(`<h1>csBasics server is running...</h1>`));

app.use('/algorithms', algorithmRoutes);

app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);
});