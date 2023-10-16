import { Document } from 'mongoose';

export interface Recipe extends Document {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  duration: number;
  style: number;
}