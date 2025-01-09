//DPUNT TOUCH
import React from "react";
import { Link } from "react-router-dom";

const BroSplit = () => {
  const workoutExercises = {
    chest: [
      "Incline Machine Chest Press",
      "Flat Machine Chest Press",
      "Pec Deck",
      "Cable Crossovers",
    ],
    back: [
      "Close Grip Lat Pulldown",
      "Chest Supported Rows (Lat Emphasis)",
      "T-Bar Row (Upper Back Emphasis)",
      "Shrugs",
    ],
    legs: ["Squats", "Seated Hamstring Curls", "Leg Extensions", "Calf Raises"],
    shoulders: [
      "Shoulder Press",
      "Lateral Raises",
      "Front Raises",
      "Rear Flys",
    ],
    arms: [
      "Tricep Pushdown",
      "Overhead Extensions",
      "Dips",
      "Preacher Curls",
      "Cable Curls",
      "Hammer Curls",
    ],
  };

  const daysOfWeek = [
    { day: "Mon", workout: "Chest", exercises: workoutExercises.chest },
    { day: "Tue", workout: "Back", exercises: workoutExercises.back },
    { day: "Wed", workout: "Legs", exercises: workoutExercises.legs },
    { day: "Thu", workout: "Shoulders", exercises: workoutExercises.shoulders },
    { day: "Fri", workout: "Arms", exercises: workoutExercises.arms },
    { day: "Sat", workout: "Rest", exercises: [] },
    { day: "Sun", workout: "Rest", exercises: [] },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl underline font-bold mb-4">Bro Split</h1>
        <Link to="/preview" state={{ workoutSplit: "BroSplit", daysOfWeek }}>
          <button className="bg-green-500 p-3 mb-2 rounded-md text-white font-semibold hover:opacity-90 active:opacity-85">
            Get Started
          </button>
        </Link>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          The bro split is a bodybuilding training approach where each major
          muscle group is targeted once per week. it's often favored by more
          advanced lifters who focus on muscle hypertrophy (growth) and like to
          train each muscle group intensely.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pros and Cons</h2>
        <h3 className="text-xl font-semibold">Pros</h3>
        <ul className="list-disc ml-6">
          <li>Focuses on one muscle group per day for intense training.</li>
          <li>Allows for full recovery of each muscle group.</li>
          <li>Great for building muscle mass when training for hypertrophy.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Cons</h3>
        <ul className="list-disc ml-6">
          <li>
            Can lead to imbalanced muscle development if not programmed
            properly.
          </li>
          <li>
            Less frequency for each muscle group, which may hinder muscle growth
            for some individuals.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Sample Weekly Schedule</h2>
        <div className="lg:grid grid-cols-4 gap-4">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className="p-4 border rounded-md"
              style={{
                backgroundColor:
                  day.workout === "Chest"
                    ? "#87CEFA" 
                    : day.workout === "Back"
                    ? "#98FB98" 
                    : day.workout === "Legs"
                    ? "#FFCCCB" 
                    : day.workout === "Shoulders"
                    ? "#FFD700" 
                    : day.workout === "Arms"
                    ? "#D8BFD8" 
                    : "#D3D3D3", 
              }}
            >
              <h3 className="font-semibold text-lg">{day.day}</h3>
              <p className="text-sm">{day.workout}</p>
              <ul className="list-disc ml-6 mt-2">
                {day.exercises.length > 0 ? (
                  day.exercises.map((exercise, idx) => (
                    <li key={idx}>{exercise}</li>
                  ))
                ) : (
                  <li>rest day</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BroSplit;
