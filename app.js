const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
// Routes
const users = require('./routes/api/users');
const cheets = require('./routes/api/cheets');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB suvvessfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send("Hello World"));
app.use('/api/users', users);
app.use('/api/cheets', cheets);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port${port}`));


