import mongoose, { Schema } from 'mongoose';
import { Instruction } from '../models/Instruction';

const instructionsSchema = new mongoose.Schema({
  id: { type: String, required: true},
  number: { type: Number, required: true },
  description: {type: String,required: true}
});

const InstructionModel = mongoose.model<Instruction>('Instruction', instructionsSchema);

export default InstructionModel;