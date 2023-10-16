import mongoose, { Schema } from 'mongoose';
import { Recipe } from '../models/Recipe';

const recipeSchema = new Schema<Recipe>({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  ingredients: [{
      id: { type: String },
      name: {type: String, default: ''}
  }],
  instructions: [{
      id: { type: String},
      number: { type: Number, default: '' },
      description: {type: String, default: ''}
  }],
  duration: { type: Number, default: null },
  style: { type: Number, default: 1 },
});

const RecipeModel = mongoose.model<Recipe>('Recipe', recipeSchema);

export default RecipeModel;