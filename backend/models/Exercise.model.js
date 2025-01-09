import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  sets: {
    type: Number,
  },

  reps: {
    type: Number,
  },

  weight: {
    type: Number,
  },
});

export { exerciseSchema };

const Exercise = mongoose.model("Exercise", exerciseSchema);
export default Exercise;
