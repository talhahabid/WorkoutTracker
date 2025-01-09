//DONT TOUCH
import React from "react";
import { Link } from "react-router-dom";

const FullBody = () => {
  const workoutExercises = {
    fullBody1: [
      "Incline Machine Chest Press",
      "Front Raises",
      "Dips",
      "Chest Supported Rows",
      "Preacher Curls",
      "Calf Raises",
    ],
    fullBody2: [
      "Close Grip Lat Pulldown",
      "Rear Delt Flys",
      "Cable Curls",
      "Shrugs",
      "Seated Hamstring Curls",
      "Flat Machine Chest Press",
      "Overhead Tricep Extensions",
    ],
    fullBody3: [
      "Cable Lateral Raises",
      "Tricep Pressdown (Bar)",
      "Seated Cable Curls",
      "Pec Deck",
      "Lat Pulldowns",
      "Leg Extensions",
    ],
  };

  const daysOfWeek = [
    {
      day: "Mon",
      workout: "Full Body 1",
      exercises: workoutExercises.fullBody1,
    },
    { day: "Tue", workout: "Rest", exercises: [] },
    {
      day: "Wed",
      workout: "Full Body 2",
      exercises: workoutExercises.fullBody2,
    },
    { day: "Thu", workout: "Rest", exercises: [] },
    {
      day: "Fri",
      workout: "Full Body 3",
      exercises: workoutExercises.fullBody3,
    },
    { day: "Sat", workout: "Rest", exercises: [] },
    { day: "Sun", workout: "Rest", exercises: [] },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl underline font-bold mb-4">Full Body</h1>
        <Link to="/preview" state={{ workoutSplit: "FullBody", daysOfWeek }}>
          <button className="bg-green-500 p-3 mb-2 rounded-md text-white font-semibold hover:opacity-90 active:opacity-85">
            Get Started
          </button>
        </Link>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          The Full Body workout routine is designed to target all major muscle
          groups in the body. Each workout session includes exercises that work
          the chest, back, shoulders, arms, and legs. This routine is great for
          building overall strength and muscle while providing ample recovery
          time between sessions. It's ideal for people looking to improve their
          fitness level or for those with limited time to commit to the gym.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pros and Cons</h2>
        <h3 className="text-xl font-semibold">Pros</h3>
        <ul className="list-disc ml-6">
          <li>Targets all major muscle groups in one workout.</li>
          <li>
            Efficient use of time, especially for those training less
            frequently.
          </li>
          <li>Great for overall strength and muscle building.</li>
          <li>Suitable for beginners and advanced athletes alike.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Cons</h3>
        <ul className="list-disc ml-6">
          <li>Can be taxing if not properly managed with rest days.</li>
          <li>Not as specialized for muscle growth in specific areas.</li>
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
                  day.workout === "Full Body 1"
                    ? "#87CEFA"
                    : day.workout === "Full Body 2"
                    ? "#A7F3D0"
                    : day.workout === "Full Body 3"
                    ? "#BFD8B8"
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
                  <li>Rest Day</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FullBody;
