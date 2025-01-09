import mongoose from "mongoose";
import { exerciseSchema } from "./Exercise.model.js";

export const daySchema = new mongoose.Schema(
  {
    Monday: [exerciseSchema],
    Tuesday: [exerciseSchema],
    Wednesday: [exerciseSchema],
    Thursday: [exerciseSchema],
    Friday: [exerciseSchema],
    Saturday: [exerciseSchema],
    Sunday: [exerciseSchema],
  },
  { _id: false }
);
