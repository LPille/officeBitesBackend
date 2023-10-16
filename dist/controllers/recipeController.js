"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecipe = exports.getAllRecipes = void 0;
const recipes = [];
const getAllRecipes = (req, res) => {
    res.json({ recipes });
};
exports.getAllRecipes = getAllRecipes;
const addRecipe = (req, res) => {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = {
        id: String(recipes.length + 1),
        name,
        ingredients,
        instructions,
    };
    recipes.push(newRecipe);
    res.json({ message: 'Recipe added successfully', recipe: newRecipe });
};
exports.addRecipe = addRecipe;
//# sourceMappingURL=recipeController.js.map