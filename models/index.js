const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const dotenv = require('dotenv')
dotenv.config()

const db = {}
db.mongoose = mongoose
db.url = process.env.DB_URL
db.Cocktail = require('../models/model')(mongoose)

module.exports = db