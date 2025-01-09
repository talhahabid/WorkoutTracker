//DONT TOUCH
import React from "react";
import { Link } from "react-router-dom";

const UpperLower = () => {
  const workoutExercises = {
    upper1: [
      "Incline Chest Machine Press",
      "Chest Supported Rows",
      "Pec Deck",
      "Close Grip Lat Pulldown",
      "Machine Shoulder Press",
      "Preacher Curl",
      "Tricep Pressdown (Bar)",
    ],
    lower1: [
      "Smith Machine Squats",
      "Seated Hamstring Curls",
      "Leg Extensions",
      "Hip Abductors",
      "Standing Calf Raises",
    ],
    upper2: [
      "Overhead Tricep Extensions",
      "Dips",
      "Cable Lateral Raises",
      "Cable Curls",
      "Lat Pulldown",
      "Flat Chest Machine Press",
    ],
    lower2: [
      "Smith Machine Squats",
      "Smith Machine RDLs",
      "Bulgarian Split Squats",
      "Hip Thrusts",
      "Seated Calf Raises",
    ],
  };

  const daysOfWeek = [
    { day: "Mon", workout: "Upper 1", exercises: workoutExercises.upper1 },
    { day: "Tue", workout: "Lower 1", exercises: workoutExercises.lower1 },
    { day: "Wed", workout: "Rest", exercises: [] },
    { day: "Thu", workout: "Upper 2", exercises: workoutExercises.upper2 },
    { day: "Fri", workout: "Lower 2", exercises: workoutExercises.lower2 },
    { day: "Sat", workout: "Rest", exercises: [] },
    { day: "Sun", workout: "Rest", exercises: [] },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="font-bold mb-4 text-3xl underline">Upper-Lower</h1>
        <Link to="/preview" state={{ workoutSplit: "UpperLower", daysOfWeek }}>
          <button className="bg-green-500 p-3 mb-2 rounded-md text-white font-semibold hover:opacity-90 active:opacity-85">
            Get Started
          </button>
        </Link>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          The Upper-Lower split is a training routine where the body is divided
          into two categories: Upper body and Lower body. The upper body days
          focus on the chest, back, shoulders, and arms, while the lower body
          days target the legs and core. This split allows for sufficient
          recovery time while maintaining high training frequency.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pros and Cons</h2>
        <h3 className="text-xl font-semibold">Pros</h3>
        <ul className="list-disc ml-6">
          <li>Balanced training for both upper and lower body.</li>
          <li>Efficient recovery time for each muscle group.</li>
          <li>Can be done 4 days a week for most people.</li>
          <li>
            Easy to adjust to personal goals (strength, hypertrophy, etc.).
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Cons</h3>
        <ul className="list-disc ml-6">
          <li>
            Can be difficult to fit into a busy schedule with only 4 days a week
            of training.
          </li>
          <li>
            Requires careful exercise selection to avoid overtraining upper or
            lower body muscles.
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
                  day.workout === "Upper 1"
                    ? "#98FB98"
                    : day.workout === "Lower 1"
                    ? "#FCA5A5"
                    : day.workout === "Upper 2"
                    ? "#DDFFE5"
                    : day.workout === "Lower 2"
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

export default UpperLower;
