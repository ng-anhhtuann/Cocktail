'use strict';

const express = require('express');
var bodyParser = require('body-parser');
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require('dotenv');


const Cocktail = require("./models/model");
const port = process.env.PORT || 8080;
const data = {
    idDrink: '13196',
    strDrink: 'Long vodka',
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strCategory: 'Ordinary Drink',
    strIBA: null,
    strAlcoholic: 'Alcoholic',
    strGlass: 'Highball glass',
    strInstructions: 'Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka',
    strInstructionsES: null,
    strInstructionsDE: 'Schütteln Sie ein hohes Glas mit Eiswürfeln und Angostura und beschichten Sie so die Innenseite des Glases. Den Wodka darüber gießen, 1 Scheibe Limette hinzufügen und den Saft aus dem Rest herausquetschen, mit Tonic mischen, umrühren und voila, Sie haben einen langen Wodka.',
    strInstructionsFR: null,
    strInstructionsIT: "Agitare un bicchiere alto con cubetti di ghiaccio e angostura, ricoprendo l'interno del bicchiere.\r\n" +
      'Versare la vodka su questo, aggiungere 1 fetta di lime e spremere il succo dal resto, mescolare con il tonico, mescolare e voilà hai una Long Vodka',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
    strIngredient1: 'Vodka',
    strIngredient2: 'Lime',
    strIngredient3: 'Angostura bitters',
    strIngredient4: 'Tonic water',
    strIngredient5: 'Ice',
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: '5 cl ',
    strMeasure2: '1/2 ',
    strMeasure3: '4 dashes ',
    strMeasure4: '1 dl Schweppes ',
    strMeasure5: '4 ',
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: null,
    strImageAttribution: null,
    strCreativeCommonsConfirmed: 'No',
    dateModified: '2017-08-24 10:00:12',
    _id: "632b23e4ffe4d3989c7404be"
  }
let app = express();

dotenv.config();

app.use(cors());
app.use(morgan("common"));       //get what request is on
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