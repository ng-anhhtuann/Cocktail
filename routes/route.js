
let controller = require('../controllers/controller.js');
module.exports = function(app) {
    app.get('/search/cocktail/n', controller.searchCocktailByName);
    app.get('/search/cocktail/i', controller.searchCocktailByIngredient);
    app.get('/search/ingredient/n', controller.searchIngredientByName);
    app.get('/lookup/cocktail/r', controller.lookupRandomCocktail);
    app.get('/lookup/cocktail/i', controller.lookupCocktailById);
    app.get('/lookup/ingredient/i', controller.lookupIngreDientById);
    app.get('/lookup/cocktail/10r', controller.lookup10RandomCocktail);
    app.get('/filter/cocktail/c', controller.filterByCategory);
    app.get('/filter/cocktail/a', controller.filterByAlcoholic);
    app.get('/filter/cocktail/g', controller.filterByGlass);
    app.get('/filter/cocktail/mi', controller.filterByMultiIngredients);
    app.get('/list/ingredient', controller.listIngredients);
    app.get('/list/alcoholic', controller.listAlcoholic);
    app.get('/list/glass', controller.listGlasses);
    app.get('/list/category', controller.listCategories);
    app.get('/list/popular', controller.listPopular);
};
