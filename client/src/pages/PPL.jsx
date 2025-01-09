//DPUNT TOUCH
import React from "react";
import { Link } from "react-router-dom";

const PPL = () => {
  const workoutExercises = {
    push: [
      "Incline Machine Chest Press",
      "Flat Machine Chest Press",
      "Pec Deck",
      "Machine Shoulder Press",
      "Cable Lateral Raises",
      "Triceps Pressdown (Bar)",
      "Overhead Cable Triceps Extension",
      "Dips",
    ],
    pull: [
      "Chest Supported Rows",
      "Close Grip Lat Pulldowns",
      "Barbell Shrugs",
      "Rear Delt Flys",
      "Preacher Curls",
      "Cable Curls",
    ],
    legs: [
      "Smith Machine Squats",
      "Seated Hamstring Curls",
      "Leg Extensions",
      "Hip Abductor",
      "Calf Raises",
    ],
  };

  const daysOfWeek = [
    { day: "Mon", workout: "Push", exercises: workoutExercises.push },
    { day: "Tue", workout: "Pull", exercises: workoutExercises.pull },
    { day: "Wed", workout: "Legs", exercises: workoutExercises.legs },
    { day: "Thu", workout: "Push", exercises: workoutExercises.push },
    { day: "Fri", workout: "Pull", exercises: workoutExercises.pull },
    { day: "Sat", workout: "Legs", exercises: workoutExercises.legs },
    { day: "Sun", workout: "Rest", exercises: [] },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className=" font-bold mb-4 text-3xl underline">Push-Pull-Legs</h1>
        <Link to="/preview" state={{ workoutSplit: "PPL", daysOfWeek }}>
          <button className="bg-green-500 p-3 mb-2 rounded-md text-white font-semibold hover:opacity-90 active:opacity-85">
            Get Started
          </button>
        </Link>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          The Push-Pull-Legs (PPL) split is a workout routine that divides
          training into three categories: Push, Pull, and Legs. Each day focuses
          on different muscle groups and types of movements. Push workouts
          involve chest, shoulders, and triceps; Pull workouts target back and
          biceps; and Legs focuses on quads, hamstrings, and calf exercises.
          This split is popular because it allows for ample recovery while
          maintaining frequency and intensity.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pros and Cons</h2>
        <h3 className="text-xl font-semibold">Pros</h3>
        <ul className="list-disc ml-6">
          <li>Balanced training of all major muscle groups.</li>
          <li>Frequent muscle stimulation for growth.</li>
          <li>
            Flexible scheduling options (can be done 3, 4, or 6 days a week).
          </li>
          <li>Easy to adjust to individual needs and recovery times.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Cons</h3>
        <ul className="list-disc ml-6">
          <li>Requires good recovery management to avoid overtraining.</li>
          <li>
            Can be challenging to fit into a busy schedule if training six days
            a week.
          </li>
        </ul>
      </section>

      <section className="mb-6 bg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold mb-2">
            Sample Weekly Schedule
          </h2>
        </div>
        <div className="lg:grid grid-cols-4 gap-4">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow mb-5 hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor:
                  day.workout === "Push"
                    ? "#87CEFA"
                    : day.workout === "Pull"
                    ? "#98FB98"
                    : day.workout === "Legs"
                    ? "#FFCCCB"
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

export default PPL;
