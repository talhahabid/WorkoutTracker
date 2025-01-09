import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEditProfile } from "../hooks/useEditProfile";

const Preview = () => {
  const { editProfile } = useEditProfile();
  const location = useLocation();
  const navigate = useNavigate();
  const { workoutSplit, daysOfWeek } = location.state || {};
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  if (!user) return;
  if (!workoutSplit || !daysOfWeek) {
    return <div>No workout data available.</div>;
  }

  useEffect(() => console.log(daysOfWeek), []);

  const handleConfirm = async () => {
    try {
      await editProfile(user.user.username, "", workoutSplit);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const startDate = dayjs();
  const endDate = startDate.add(30, "day");

  const dayColors = {
    Mon: "bg-blue-200",
    Tue: "bg-green-200",
    Wed: "bg-yellow-200",
    Thu: "bg-purple-200",
    Fri: "bg-red-200",
    Sat: "bg-teal-200",
    Sun: "bg-gray-300",
  };

  const calendar = [];
  let currentDate = startDate;

  while (currentDate.isBefore(endDate)) {
    const dayIndex = (currentDate.day() + 6) % 7;
    const daySchedule = daysOfWeek[dayIndex];

    calendar.push({
      date: currentDate.format("MMM D"),
      day: daySchedule.day,
      workout: daySchedule.workout,
    });

    currentDate = currentDate.add(1, "day");
  }

  const CustomWorkout = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/workout/${user.user._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwtToken}`,
          },
          body: JSON.stringify(daysOfWeek),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2 sticky top-0">
        <h1 className="text-3xl font-bold">Preview</h1>
        <button
          onClick={() => {
            handleConfirm();
            if (workoutSplit === "Custom") {
              CustomWorkout();
            }
          }}
          className="bg-green-500 p-3 rounded-md text-white font-semibold hover:opacity-90 active:opacity-85 sticky top-0"
        >
          Confirm Split
        </button>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {calendar.map((day, index) => (
          <div
            key={index}
            className={`w-full p-4 border rounded-md shadow hover:shadow-lg transition-shadow duration-300 ${
              dayColors[day.day] || "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold text-center">{day.date}</h2>
            <p className="text-center">{day.day}</p>
            <p className="text-center font-medium">{day.workout}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
