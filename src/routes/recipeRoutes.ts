import express from 'express';
import { getAllRecipes, addRecipe, updateRecipe, deleteRecipe } from '../controllers/recipeController';
const Recipe = require('../models/Recipe');
const router = express.Router();

router.get('/recipes', getAllRecipes);
router.post('/recipe', addRecipe);
router.put('/recipe/:id', updateRecipe);
router.delete('/recipe/:id', deleteRecipe);

export default router;
