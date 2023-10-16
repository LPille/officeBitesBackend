import { Document } from 'mongoose';

export interface Instruction extends Document {
  id: string
  number: number
  description: string
}