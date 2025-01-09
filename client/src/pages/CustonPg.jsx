import React, { useState } from "react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const WorkoutForm = ({ onAddExercise }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExercise(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1 className="text-4xl font-bold">Add Exercise</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          className="p-3 rounded-md outline-none"
          type="text"
          required
          placeholder="Day"
          id="day"
          onChange={handleChange}
        />
        <input
          className="p-3 rounded-md outline-none"
          type="text"
          required
          placeholder="Exercise"
          id="exercise"
          onChange={handleChange}
        />
        <input
          className="p-3 rounded-md outline-none"
          type="number"
          required
          placeholder="Sets"
          id="sets"
          onChange={handleChange}
        />
        <input
          className="p-3 rounded-md outline-none"
          type="number"
          required
          placeholder="Reps"
          id="reps"
          onChange={handleChange}
        />
        <input
          className="p-3 rounded-md outline-none"
          type="number"
          required
          placeholder="Weight(lbs)"
          id="weight"
          onChange={handleChange}
        />
        <button className="p-3 bg-green-500 rounded-md outline-none font-semibold text-white hover:opacity-90 active:85">
          Submit
        </button>
      </form>
    </div>
  );
};

const WorkoutDays = () => {
  const [edit, setEdit] = useState({});
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const workoutDayTemplate = {
    weekday: "",
    title: "",
    exercise: [],
  };

  const handleChange = (index, e) => {
    setWorkoutSchedule((prev) => {
      const temp = [...prev];
      temp[index] = { ...temp[index], title: e.target.value };
      return temp;
    });
  };

  const handleClick = (index) => {
    setEdit((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const [workoutSchedule, setWorkoutSchedule] = useState(
    weekdays.map((day, index) => {
      return {
        ...workoutDayTemplate,
        weekday: day,
        title: `Title${index + 1}`,
      };
    })
  );

  const handleAddExercise = (data) => {
    const { day, exercise, sets, reps, weight } = data;
    setWorkoutSchedule((prev) => {
      const temp = [...prev];
      return temp.map((dayItem) => {
        if (
          dayItem.weekday.toLowerCase() === day.toLowerCase() ||
          dayItem.title.toLowerCase() === day.toLowerCase()
        ) {
          return {
            ...dayItem,
            exercise: [...dayItem.exercise, { exercise, sets, reps, weight }],
          };
        }
        return dayItem;
      });
    });
  };

  const convertToDaysOfWeek = (workoutSchedule) => {
    const daysOfWeek = workoutSchedule.map((day, index) => {
      return {
        day: day.weekday.slice(0, 3),
        workout: day.title,
        exercises: day.exercise || [],
      };
    });
    return daysOfWeek;
  };

  const handleDeleteExercise = (dayIndex, exerciseIndex) => {
    setWorkoutSchedule((prev) => {
      const temp = [...prev];
      const updatedDay = { ...temp[dayIndex] };
      updatedDay.exercise = updatedDay.exercise.filter(
        (_, index) => index !== exerciseIndex
      );
      temp[dayIndex] = updatedDay;
      return temp;
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl underline font-bold">Custom Workout</h1>
        <Link
          to="/preview"
          state={{
            workoutSplit: "Custom",
            daysOfWeek: convertToDaysOfWeek(workoutSchedule),
          }}
        >
          <button className="bg-green-500 p-3 rounded-md text-white font-semibold hover:opacity-90 active:opacity-85">
            Get Started
          </button>
        </Link>
      </div>
      <div className="lg:flex">
        <div className="w-full lg:w-8/12 h-screen overflow-y-auto border-t-4 border-b-4 border-black">
          {workoutSchedule.map((day, dayIndex) => (
            <div
              className="p-10 mb-2 border-4 shadow hover:shadow-lg transition-shadow duration-300"
              key={dayIndex}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{day.weekday}</span>
                <div className="flex items-center">
                  {!edit[dayIndex] ? (
                    <span className="text-2xl font-bold mr-4">{day.title}</span>
                  ) : (
                    <input
                      className="p-3 rounded-md mr-4 outline-none"
                      value={day.title}
                      onChange={(e) => handleChange(dayIndex, e)}
                    />
                  )}
                  <div onClick={() => handleClick(dayIndex)}>
                    {!edit[dayIndex] ? (
                      <FaEdit
                        className="cursor-pointer text-blue-500"
                        size={24}
                      />
                    ) : (
                      <FaSave
                        className="cursor-pointer text-green-500"
                        size={24}
                      />
                    )}
                  </div>
                </div>
              </div>
              {day.exercise && day.exercise.length > 0 ? (
                <ul>
                  {day.exercise.map((exercise, exerciseIndex) => (
                    <li
                      key={exerciseIndex}
                      className="text-gray-500 mt-2 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-300 bg-white"
                    >
                      <h3 className="text-lg font-medium">
                        {exercise.exercise}
                      </h3>
                      Sets: {exercise.sets} | Reps: {exercise.reps} | Weight:{" "}
                      {exercise.weight} lbs
                      <FaTrash
                        className="cursor-pointer text-red-500 inline-block ml-2"
                        size={20}
                        onClick={() =>
                          handleDeleteExercise(dayIndex, exerciseIndex)
                        }
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ml-1">Rest Day</p>
              )}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-4/12 lg:border-t-4 border-b-4 border-black">
          <WorkoutForm onAddExercise={handleAddExercise} />
        </div>
      </div>
    </div>
  );
};

const CustonPg = () => {
  return (
    <div className="flex p-3">
      <WorkoutDays />
    </div>
  );
};

export default CustonPg;
