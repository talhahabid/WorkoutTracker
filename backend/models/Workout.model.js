import mongoose from "mongoose";
import { daySchema } from "./Day.model.js";

const workoutSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workoutPlans: {
      PPL: daySchema,
      UpperLower: daySchema,
      FullBody: daySchema,
      BroSplit: daySchema,
      Custom: daySchema,
    },
  },
  
);

const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;
