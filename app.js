'use strict';

const express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require('dotenv');

const port = process.env.PORT || 8080;
let app = express();

dotenv.config();

app.use(cors());
app.use(morgan("common"));      
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect((process.env.DB_URL), async () => { 
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
})

app.listen(port,() => console.log('app is listening on port ' + port));

let route = require('./routes/route')
route(app);