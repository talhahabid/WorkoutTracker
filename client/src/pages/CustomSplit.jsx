import React from "react";
import { Link } from "react-router-dom";

const CustomSplit = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4 underline">Custom Split</h1>
        <Link to="/build-workout">
          <button className="bg-green-500 p-3 mb-2 rounded-md text-white font-semibold hover:opacity-90 active:opacity-85">
            Get Started
          </button>
        </Link>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          Creating a custom workout split allows you to target specific muscle
          groups and structure your workouts around your goals and recovery
          needs. Whether you want to focus more on strength or hypertrophy, or
          you have specific areas to target, a personalized workout plan gives
          you the flexibility to adapt your routine based on your progress.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Pros and Cons</h2>
        <h3 className="text-xl font-semibold mb-2">Pros</h3>
        <ul className="list-disc ml-6">
          <li>Targets specific muscle groups and goals.</li>
          <li>Flexible structure tailored to individual preferences.</li>
          <li>Ability to adjust frequency and intensity based on recovery.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">Cons</h3>
        <ul className="list-disc ml-6">
          <li>
            Requires consistent monitoring of progress to optimize recovery.
          </li>
          <li>
            May take some time to determine the right balance for individual
            needs.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Personalize Your Split</h2>
        <p>
          A custom split is most effective when tailored to your specific
          fitness goals and muscle recovery needs. Here are some examples of how
          you can adjust your split:
        </p>
        <ul className="list-disc ml-6">
          <li>
            If you want to focus more on chest development, you can schedule
            more push days or include more push exercises.
          </li>
          <li>
            If your legs need more attention, increase the frequency of leg days
            or add more volume to your leg exercises.
          </li>
          <li>
            If you're focusing on strength, you may reduce the number of reps
            and focus on heavier weights with more rest.
          </li>
        </ul>
        <p className="">
          Adjust your workout split based on how your body is recovering and how
          much time you have to train each week. The goal is to maintain a
          balance between consistency, recovery, and intensity.
        </p>
      </section>
    </div>
  );
};

export default CustomSplit;
