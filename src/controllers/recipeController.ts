import { Request, Response } from 'express';
import RecipeModel from '../schemes/recipe';
import { Collection } from 'mongodb';


export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await RecipeModel.find();
    res.json({ recipes });
  } catch (error) {
    console.error('Error getting recipes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



export const addRecipe = async (req: Request, res: Response) => {
  try {
    const { name, description, duration, style, ingredients, instructions, } = req.body;
    const newRecipe = new RecipeModel({ name, description, ingredients, instructions, duration, style,
    });

    await newRecipe.save();
    res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  const { name, description, duration, style, ingredients, instructions } = req.body;

  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        duration,
        style,
        ingredients,
        instructions
      },
      { new: true }
    );
    res.json(updatedRecipe);
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(400).json({ message: error });
  }
};


export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const recipeId = req.params.id;

    if (!recipeId) {
      return res.status(400).json({ message: 'Recipe ID not provided.' });
    }

    const deletedRecipe = await RecipeModel.findByIdAndDelete(recipeId);

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found.' });
    }

    res.json({ message: 'Recipe deleted successfully', recipe: deletedRecipe });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};