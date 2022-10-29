'use strict';
const dotenv = require('dotenv');
const axios = require('axios');

const {Cocktail, Ingredient} = require("../models/model");

dotenv.config();

module.exports = {
    searchCocktailByName : async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: process.env.URL_BY_NAME,
                params: {s: req.query.name},
                headers: {
                  'X-RapidAPI-Key': process.env.KEY_DB,
                  'X-RapidAPI-Host': process.env.HOST
                }
            };
            var response = await axios.request(options);
            if (response.data) {
                const data = response.data;
                const drinks = data.drinks;

                drinks.forEach((value) => {
                    var cocktail = new Cocktail(value);
                    Cocktail.findOne({'idDrink': value.idDrink})
                    .then(async data => {
                        if (!data){
                            await cocktail.save();
                        }
                    })
                })
                res.send(response.data);
            } else {
                res.send('error');
            }
        } catch (err) {
            res.send('something happen : ' + err.message);
        }
    },
    searchCocktailByIngredient : async (req, res) => {
        try{
            const options = {
            method: 'GET',
            url: process.env.URL_NAME_BY_INGRE,
            params: {i: req.query.ingredient},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
            
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        } catch (error) {
            res.send('something happen : ' + err.message);
        }
    },
    searchIngredientByName : async (req, res) => {
        try {
        const options = {
            method: 'GET',
            url: process.env.URL_SEARCH_INGRE_BY_NAME,
            params: {i: req.query.name},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(async function (response) {
            var ingredient = new Ingredient(response.data.ingredients[0]);
    
            Ingredient.findOne({'idIngredient': ingredient.idIngredient})
            .then(async data => {
                if (!data){
                    await ingredient.save();
                }
                res.send(ingredient);
            }).catch(error => {
                res.send(error)
            })
        }).catch(function (error) {
            res.send(error);
        });

        } catch (error) {
            res.send('something happen : ' +error);
        }
    },
    lookupRandomCocktail : async (req, res) => {
        try {
        const options = {
            method: 'GET',
            url: process.env.URL_RANDOM_COCKTAIL,
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
            var cocktail = new Cocktail(response.data.drinks[0]);
            
            Cocktail.findOne({'idDrink': cocktail.idDrink})
            .then(async data => {
                if (!data){
                    await cocktail.save();
                }
                res.send(cocktail);
            }).catch(error => {
                res.send(error)
            })
        }).catch(function (error) {
            res.send(error);
        });
        } catch (error) {
            res.send('something happen : ' +error);
        }
    },
    lookupCocktailById : async (req, res) => {
        try {
        const options = {
            method: 'GET',
            url: process.env.URL_COCKTAIL_BY_ID,
            params: {i: req.query.id},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
        };
        axios.request(options).then(async function (response) {
            var cocktail = new Cocktail(response.data.drinks[0]);
            
            Cocktail.findOne({'idDrink': cocktail.idDrink})
            .then(async data => {
                if (!data){
                    await cocktail.save();
                }
                res.send(cocktail);
            }).catch(error => {
                res.send(error)
            })
        }).catch(function (error) {
            res.send(error);
        });

        } catch (error) {
            res.send('something happen : ' +error);
        }
    },
    lookupIngreDientById : async (req, res) => {
        try {
            const options = {
            method: 'GET',
            url: process.env.URL_INGRE_BY_ID,
            params: {iid: req.query.id},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
            var ingredient = new Ingredient(response.data.ingredients[0]);
    
            Ingredient.findOne({'idIngredient': ingredient.idIngredient})
            .then(async data => {
                if (!data){
                    await ingredient.save();
                }
                res.send(ingredient);
            }).catch(error => {
                res.send(error)
            })
          }).catch(function (error) {
              res.send(error);
          });
        } catch (error) {
            res.send('something happen : ' +error);
        }

    },
    lookup10RandomCocktail : async (req, res) => {
        try {
        const options = {
            method: 'GET',
            url: process.env.URL_RANDOM_10_COCKTAIL,
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
        };
        var response = await axios.request(options);
            if (response.data) {
                const data = response.data;
                const drinks = data.drinks;

                drinks.forEach((value) => {
                    var cocktail = new Cocktail(value);
                    Cocktail.findOne({'idDrink': value.idDrink})
                    .then(async data => {
                        if (!data){
                            await cocktail.save();
                        }
                    })
                })
                res.send(response.data);
            } else {
                res.send('error');
            }
        } catch (err) {
            res.send('something happen : ' + err.message);
        }
    },
    filterByCategory : async (req, res) => {
        try {
        const options = {
            method: 'GET',
            url: process.env.URL_FILTER_BY_CATEGORY,
            params: {c: req.query.category},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        } catch (error) {
            res.send('something happened'+error);
        }
    },
    filterByAlcoholic : async (req, res) => {
        try{
        const options = {
            method: 'GET',
            url: process.env.URL_FILTER_BY_ALCOHOLIC,
            params: {a : req.query.alcoholic},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        }catch (error) {
            res.send('something happen : ' +error);
        }
    },
    filterByGlass : async (req, res) => {
        try{
        const options = {
            method: 'GET',
            url: process.env.URL_FILTER_BY_GLASS,
            params: {c: req.query.glass},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        } catch (error) {
            res.send('something happen : ' +error);
        }
    },
    filterByMultiIngredients : async (req, res) => {
        try{ 
        const options = {
            method: 'GET',
            url: process.env.URL_FILTER_BY_MULTI_INGRE,
            params: {i: req.query.ingredient},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        } catch (error) {
            res.send('something happen : ' +error);
        }
    },
    listIngredients : async (req, res) => {
        try{
        const options = {
            method: 'GET',
            url: process.env.URL_LIST_INGRE,
            params: {i: req.query.action},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        }catch (error){
            res.send('something happen : ' +error);
        }
    },
    listAlcoholic : async (req, res) => {
        try{
        const options = {
            method: 'GET',
            url: process.env.URL_LIST_ALCOHOLIC_FILTER,
            params: {a: req.query.action},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        }catch (error) {
            res.send('something happen : ' +error);
        }
    },
    listGlasses : async (req, res) => {
        try{
        const options = {
            method: 'GET',
            url: process.env.URL_LIST_GLASS,
            params: {g: req.query.action},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        }catch (error) {
            res.send('something happen : ' +error);
        }
    },
    listCategories : async (req, res) => {
        try{
        const options = {
            method: 'GET',
            url: process.env.URL_LIST_CATEGORY,
            params: {c: req.query.action},
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        }catch (error) {
            res.send('something happen : ' +error);
        }
    },
    listPopular : async (req, res) => {
        try{
        const options = {
            method: 'GET',
            url: process.env.URL_LIST_POPULAR_COCKTAIL,
            headers: {
              'X-RapidAPI-Key': process.env.KEY_DB,
              'X-RapidAPI-Host': process.env.HOST
            }
          };
          axios.request(options).then(function (response) {
              res.send(response.data);
          }).catch(function (error) {
              res.send(error);
          });
        } catch (error) {
            res.send('something happen : ' +error);
        }
    }
}
