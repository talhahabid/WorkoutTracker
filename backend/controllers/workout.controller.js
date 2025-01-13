import User from "../models/User.model.js";
import Workout from "../models/Workout.model.js";
import { errorHandler } from "../utils/error.js";

export const createCustomWorkoutSplit = async (req, res, next) => {
  try {
    const daysOfWeek = req.body;
    const { userId } = req.params;
    const customWorkoutPlan = {};

    const dayMap = {
      Mon: "Monday",
      Tue: "Tuesday",
      Wed: "Wednesday",
      Thu: "Thursday",
      Fri: "Friday",
      Sat: "Saturday",
      Sun: "Sunday",
    };

    daysOfWeek.forEach((dayData) => {
      const { day, exercises } = dayData;
      customWorkoutPlan[dayMap[day]] = exercises.length
        ? exercises.map((exercise) => ({
            name: exercise.exercise,
            sets: parseInt(exercise.sets),
            reps: parseInt(exercise.reps),
            weight: parseInt(exercise.weight),
          }))
        : [];
    });

    const workout = await Workout.findOneAndUpdate(
      { userId },
      { $set: { "workoutPlans.Custom": customWorkoutPlan } },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Custom workout split created/updated successfully",
      data: workout,
    });
  } catch (error) {
    next(500, error);
  }
};

export const getWorkout = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    const split = user.workoutSplit;
    const workoutObject = await Workout.findOne({ userId });
    const workouts = workoutObject.workoutPlans[split];

    return res.status(200).json(workouts);
  } catch (error) {
    return next(errorHandler(500, "Failed to retrieve workouts"));
  }
};

export const editWorkout = async (req, res, next) => {
  const { userId } = req.params;
  const { _id, sets, reps, weight } = req.body;
  const date = getDayOfWeek();

  try {
    const user = await User.findById(userId);
    if (!user) return next();
    const workoutSplit = user.workoutSplit;

    const workout = await Workout.findOne({ userId });
    if (!workout) return next();
    const temp = workout.workoutPlans[workoutSplit][date];
    if (!temp) return next();

    const workoutIndex = temp.findIndex((w) => w._id.toString() === _id);
    if (workoutIndex === -1) return next();

    temp[workoutIndex].sets = sets;
    temp[workoutIndex].reps = reps;
    temp[workoutIndex].weight = weight;

    await workout.save();

    res.status(200).json({
      message: "Workout updated successfully",
      workout: temp[workoutIndex],
    });
  } catch (error) {
    return next(error);
  }
};

// export const deleteWorkout = async (req, res, next) => {
//   const { _id } = req.params;

//   try {
//     const deletedWorkout = await Workout.findByIdAndDelete(_id);
//     if (!deletedWorkout)
//       return res.status(404).json({ message: "Workout not found" });

//     res.status(200).json({ message: "Workout deleted successfully" });
//   } catch (error) {
//     next(errorHandler(500, "Could not delete workout"));
//   }
// };

const getDayOfWeek = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return daysOfWeek[today.getDay()];
};
