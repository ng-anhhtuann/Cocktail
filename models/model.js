const mongoose = require('mongoose');

const CocktailSchema = new mongoose.Schema({
    idDrink: {
        type: 'string'
        // required: true
    },
    strDrink: {
        type: 'string',
    },
    strDrinkAlternate: {
        type: 'string',
    },
    strTags: {
        type: 'string',
    },
    strVideo: {
        type: 'string',
    },
    strCategory: {
        type: 'string',
    },
    strIBA: {
        type: 'string',
    },
    strAlcoholic: {
        type: 'string',
    },
    strGlass: {
        type: 'string',
    },
    strInstructions: {
        type: 'string',
    },
    strInstructionsES: {
        type: 'string',
    },
    strInstructionsDE: {
        type: 'string',
    },
    strInstructionsFR: {
        type: 'string',
    },
    strInstructionsIT: {
        type: 'string',
    },
    strInstructionsZH_HANS: {
        type: 'string',
    },
    strInstructionsZH_HANT: {
        type: 'string',
    },
    strDrinkThumb: {
        type: 'string',
    },
    strIngredient1: {
        type: 'string',
    },
    strIngredient2: {
        type: 'string',
    },
    strIngredient3: {
        type: 'string',
    },
    strIngredient4: {
        type: 'string',
    },
    strIngredient5: {
        type: 'string',
    },
    strIngredient6: {
        type: 'string',
    },
    strIngredient7: {
        type: 'string',
    },
    strIngredient8: {
        type: 'string',
    },
    strIngredient9: {
        type: 'string',
    },
    strIngredient10: {
        type: 'string',
    },
    strIngredient11: {
        type: 'string',
    },
    strIngredient12: {
        type: 'string',
    },
    strIngredient13: {
        type: 'string',
    },
    strIngredient14: {
        type: 'string',
    },
    strIngredient15: {
        type: 'string',
    },
    strMeasure1: {
        type: 'string',
    },
    strMeasure2: {
        type: 'string',
    },
    strMeasure3: {
        type: 'string',
    },
    strMeasure4: {
        type: 'string',
    },
    strMeasure5: {
        type: 'string',
    },
    strMeasure6: {
        type: 'string',
    },
    strMeasure7: {
        type: 'string',
    },
    strMeasure8: {
        type: 'string',
    },
    strMeasure9: {
        type: 'string',
    },
    strMeasure10: {
        type: 'string',
    },
    strMeasure11: {
        type: 'string',
    },
    strMeasure12: {
        type: 'string',
    },
    strMeasure13: {
        type: 'string',
    },
    strMeasure14: {
        type: 'string',
    },
    strMeasure15: {
        type: 'string',
    },
    strImageSource: {
        type: 'string',
    },
    strImageAttribution: {
        type: 'string',
    },
    strCreativeCommonsConfirmed: {
        type: 'string',
    },
    dateModified: {
        type: 'string',
    }
})
const IngredientSchema = new mongoose.Schema({
    idIngredient: {
        type: 'string',
    },
    strIngredient: {
        type: 'string',
    },
    strDescription: {
        type: 'string',
    },
    strType: {
        type: 'string',
    },
    strAlcohol: {
        type: 'string',
    },
    strABV: {
        type: 'string',
    }
})
let Cocktail = mongoose.model("Cocktail", CocktailSchema);
let Ingredient = mongoose.model("Ingredient", IngredientSchema);
module.exports = {
    Cocktail,
    Ingredient
};