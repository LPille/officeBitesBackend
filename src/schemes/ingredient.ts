import mongoose, { Schema } from 'mongoose';
import { Ingredient } from '../models/Ingredient';

const ingredientsSchema =  new Schema<Ingredient>({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const IngredientModel = mongoose.model<Ingredient>('Ingredient', ingredientsSchema);

export default IngredientModel;