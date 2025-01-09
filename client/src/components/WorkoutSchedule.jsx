//WORKING DONT TOUCH
import React, { useEffect, useState } from "react";
import { useGetExercise } from "../hooks/useGetExercise";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEditExercise } from "../hooks/useEditExercise";
import { FaEdit, FaSave } from "react-icons/fa";

const WorkoutSchedule = ({ date }) => {
  const { user } = useAuthContext();
  const { getExercise } = useGetExercise();
  const { editExercise } = useEditExercise();
  const [workout, setWorkout] = useState(null);
  const [editingExercise, setEditingExercise] = useState(null);
  const [exerciseData, setExerciseData] = useState({});

  if (!user) return;
  useEffect(() => {
    handleGet();
  }, []);

  const workoutPlans = {
    PPL: {
      Monday: "Push",
      Tuesday: "Pull",
      Wednesday: "Legs",
      Thursday: "Push",
      Friday: "Pull",
      Saturday: "Legs",
      Sunday: "Rest",
    },
    UpperLower: {
      Monday: "Upper 1",
      Tuesday: "Lower 1",
      Wednesday: "Rest",
      Thursday: "Upper 2",
      Friday: "Lower 2",
      Saturday: "Rest",
      Sunday: "Rest",
    },
    BroSplit: {
      Monday: "Chest",
      Tuesday: "Back",
      Wednesday: "Shoulders",
      Thursday: "Arms",
      Friday: "Legs",
      Saturday: "Rest",
      Sunday: "Rest",
    },
    FullBody: {
      Monday: "Full Body 1",
      Tuesday: "Rest",
      Wednesday: "Full Body 2",
      Thursday: "Rest",
      Friday: "Full Body 3",
      Saturday: "Rest",
      Sunday: "Rest",
    },
    Custom: {
      Monday: "Custom1",
      Tuesday: "Custom2",
      Wednesday: "Custom3",
      Thursday: "Custom4",
      Friday: "Custom5",
      Saturday: "Custom6",
      Sunday: "Custom7",
    },
  };

  const handleGet = async () => {
    try {
      const data = await getExercise();
      setWorkout(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (exercise) => {
    setEditingExercise(exercise._id);
    setExerciseData({
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight,
      completed: exercise.completed,
    });
  };

  const handleSaveClick = async (exercise) => {
    await editExercise(
      exercise._id,
      exerciseData.sets,
      exerciseData.reps,
      exerciseData.weight
    );
    exercise.sets = exerciseData.sets;
    exercise.reps = exerciseData.reps;
    exercise.weight = exerciseData.weight;
    exercise.completed = exerciseData.completed;
    setEditingExercise(null);
  };

  const handleInputChange = (e, field) => {
    setExerciseData({
      ...exerciseData,
      [field]: e.target.value === "" ? "0" : e.target.value,
    });
  };

  const handleCheckboxChange = (e, exerciseId) => {
    const updatedWorkout = { ...workout };
    updatedWorkout[date] = updatedWorkout[date].map((exercise) =>
      exercise._id === exerciseId
        ? { ...exercise, completed: e.target.checked }
        : exercise
    );
    setWorkout(updatedWorkout);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between underline">
        <span className="text-center text-2xl text-gray-800">
          {workoutPlans[user.user.workoutSplit][date]}
        </span>
        <span className="text-center text-2xl text-gray-800">
          {user.user.workoutSplit} Split
        </span>
      </div>

      {workout && workout[date].length ? (
        <ul className="space-y-4 mt-6">
          {workout[date].map((exercise) => (
            <li
              key={exercise._id}
              className={`p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-300 
              ${exercise.completed ? "bg-green-100" : "bg-white"}`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-lg font-bold ${
                    exercise.completed
                      ? "text-gray-500 line-through"
                      : "text-gray-700"
                  }`}
                >
                  {exercise.name}
                </h3>
                {editingExercise === exercise._id ? (
                  <FaSave
                    onClick={() => handleSaveClick(exercise)}
                    className="cursor-pointer text-green-500"
                    size={24}
                  />
                ) : (
                  <FaEdit
                    onClick={() => handleEditClick(exercise)}
                    className="cursor-pointer text-blue-500"
                    size={24}
                  />
                )}
              </div>

              {editingExercise === exercise._id ? (
                <div className="mt-2">
                  <div className="flex space-x-4">
                    <input
                      type="number"
                      value={exerciseData.sets}
                      className="border p-2 rounded-md w-1/3 outline-none"
                      onChange={(e) => handleInputChange(e, "sets")}
                      required
                    />
                    <input
                      type="number"
                      value={exerciseData.reps}
                      className="border p-2 rounded-md w-1/3 outline-none"
                      onChange={(e) => handleInputChange(e, "reps")}
                      required
                    />
                    <input
                      type="number"
                      value={exerciseData.weight}
                      className="border p-2 rounded-md w-1/3 outline-none"
                      onChange={(e) => handleInputChange(e, "weight")}
                      required
                    />
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500 mt-2">
                  Sets: {exercise.sets} | Reps: {exercise.reps} | Weight:{" "}
                  {exercise.weight} lbs
                </p>
              )}

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  checked={exercise.completed}
                  onChange={(e) => handleCheckboxChange(e, exercise._id)}
                  className="mr-2 w-5 h-5 text-green-500"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-6">Rest Day</p>
      )}
    </div>
  );
};

export default WorkoutSchedule;
