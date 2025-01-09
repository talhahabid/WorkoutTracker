import { errorHandler } from "../utils/error.js";
import User from "../models/User.model.js";

const validWorkoutSplits = [
  "PPL",
  "UpperLower",
  "BroSplit",
  "FullBody",
  "Custom",
];

export const editProfile = async (req, res, next) => {
  const { _id } = req.params;
  const { username, password, workoutSplit } = req.body;
  let password_real = password;

  const existingUsername = await User.findOne({ username });
  if (existingUsername && existingUsername._id.toString() !== _id.toString())
    return next(errorHandler(404, "Username already exists"));

  const user = await User.findById(_id);
  if (!user) return next(errorHandler(404, "User not found"));

  if (!password_real) password_real = user.password;

  if (workoutSplit && workoutSplit !== user.workoutSplit) {
    if (!validWorkoutSplits.includes(workoutSplit)) {
      return next(
        errorHandler(
          404,
          "Workout split not available. Only Splits Available Are: PPL, UpperLower, FullBody, BroSplit, and Custom"
        )
      );
    }
  }
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { username, password: password_real, workoutSplit },
    { new: true }
  );

  if (!updatedUser) return next(errorHandler(404, "User not found"));

  res.status(200).json({
    message: "Profile updated successfully",
    user: {
      username: updatedUser.username,
      workoutSplit: updatedUser.workoutSplit,
    },
  });
};

export const editWorkoutSplit = async (req, res, next) => {
  try {
    const { _id, workoutSplit } = req.body;

    const user = await User.findByIdAndUpdate(
      _id,
      { workoutSplit },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Workout split updated", user });
  } catch (err) {
    return next();
  }
};
