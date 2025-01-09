//DONT TOUCH - WORKING
import React from "react";
import WorkoutSchedule from "../components/WorkoutSchedule";

const Home = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  return (
    <div className="flex">
      <div className="w-full overflow-hidden">
        <h1 className="text-4xl lg:text-5xl text-center mt-5 italic ">{formattedDate}</h1>
        <WorkoutSchedule date={weekday}></WorkoutSchedule>
      </div>
    </div>
  );
};

export default Home;
