import Workout from "../models/Workout.model.js";

export const populateWorkout = async (userId) => {
  const workoutPlans = {
    userId: userId,
    workoutPlans: {
      PPL: {
        Monday: [
          { name: "Incline Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Flat Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Pec Deck", sets: 3, reps: 10, weight: 0 },
          { name: "Machine Shoulder Press", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Lateral Raises", sets: 3, reps: 10, weight: 0 },
          { name: "Triceps Pressdown (Bar)", sets: 3, reps: 10, weight: 0 },
          {
            name: "Overhead Cable Triceps Extension",
            sets: 3,
            reps: 10,
            weight: 0,
          },
          { name: "Dips", sets: 3, reps: 10, weight: 0 },
        ],

        Tuesday: [
          { name: "Chest Supported Rows", sets: 3, reps: 10, weight: 0 },
          { name: "Close Grip Lat Pulldowns", sets: 3, reps: 10, weight: 0 },
          { name: "Barbell Shrugs", sets: 3, reps: 10, weight: 0 },
          { name: "Rear Delt Flys", sets: 3, reps: 10, weight: 0 },
          { name: "Preacher Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Curls", sets: 3, reps: 10, weight: 0 },
        ],

        Wednesday: [
          { name: "Smith Machine Squats", sets: 3, reps: 10, weight: 0 },
          { name: "Seated Hamstring Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Leg Extensions", sets: 3, reps: 10, weight: 0 },
          { name: "Hip Abductor", sets: 3, reps: 10, weight: 0 },
          { name: "Calf Raises", sets: 3, reps: 10, weight: 0 },
        ],

        Thursday: [
          { name: "Incline Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Flat Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Pec Deck", sets: 3, reps: 10, weight: 0 },
          { name: "Machine Shoulder Press", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Lateral Raises", sets: 3, reps: 10, weight: 0 },
          { name: "Triceps Pressdown (Bar)", sets: 3, reps: 10, weight: 0 },
          {
            name: "Overhead Cable Triceps Extension",
            sets: 3,
            reps: 10,
            weight: 0,
          },
          { name: "Dips", sets: 3, reps: 10, weight: 0 },
        ],

        Friday: [
          { name: "Chest Supported Rows", sets: 3, reps: 10, weight: 0 },
          { name: "Close Grip Lat Pulldowns", sets: 3, reps: 10, weight: 0 },
          { name: "Barbell Shrugs", sets: 3, reps: 10, weight: 0 },
          { name: "Rear Delt Flys", sets: 3, reps: 10, weight: 0 },
          { name: "Preacher Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Curls", sets: 3, reps: 10, weight: 0 },
        ],

        Saturday: [
          { name: "Smith Machine Squats", sets: 3, reps: 10, weight: 0 },
          { name: "Seated Hamstring Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Leg Extensions", sets: 3, reps: 10, weight: 0 },
          { name: "Hip Abductor", sets: 3, reps: 10, weight: 0 },
          { name: "Calf Raises", sets: 3, reps: 10, weight: 0 },
        ],

        Sunday: [[]],
      },

      UpperLower: {
        Monday: [
          { name: "Incline Chest Machine Press", sets: 3, reps: 10, weight: 0 },
          { name: "Chest Supported Rows", sets: 3, reps: 10, weight: 0 },
          { name: "Pec Deck", sets: 3, reps: 10, weight: 0 },
          { name: "Close Grip Lat Pulldown", sets: 3, reps: 10, weight: 0 },
          { name: "Machine Shoulder Press", sets: 3, reps: 10, weight: 0 },
          { name: "Preacher Curl", sets: 3, reps: 10, weight: 0 },
          { name: "Tricep Pressdown (Bar)", sets: 3, reps: 10, weight: 0 },
        ],

        Tuesday: [
          { name: "Smith Machine Squats", sets: 3, reps: 10, weight: 0 },
          { name: "Seated Hamstring Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Leg Extensions", sets: 3, reps: 10, weight: 0 },
          { name: "Hip Abductors", sets: 3, reps: 10, weight: 0 },
          { name: "Standing Calf Raises", sets: 3, reps: 10, weight: 0 },
        ],

        Wednesday: [],
        Thursday: [
          { name: "Overhead Tricep Extensions", sets: 3, reps: 10, weight: 0 },
          { name: "Dips", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Lateral Raises", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Lat Pulldown", sets: 3, reps: 10, weight: 0 },
          { name: "Flat Chest Machine Press", sets: 3, reps: 10, weight: 0 },
        ],

        Friday: [
          { name: "Smith Machine Squats", sets: 3, reps: 10, weight: 0 },
          { name: "Smith Machine RDLs", sets: 3, reps: 10, weight: 0 },
          { name: "Bulgarian Split Squats", sets: 3, reps: 10, weight: 0 },
          { name: "Hip Thrusts", sets: 3, reps: 10, weight: 0 },
          { name: "Seated Calf Raises", sets: 3, reps: 10, weight: 0 },
        ],

        Saturday: [[]],

        Sunday: [[]],
      },

      BroSplit: {
        Monday: [
          { name: "Incline Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Flat Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Pec Deck", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Crossovers", sets: 3, reps: 10, weight: 0 },
        ],

        Tuesday: [
          { name: "Close Grip Lat Pulldown", sets: 3, reps: 10, weight: 0 },
          {
            name: "Chest Supported Rows (Lat Emphasis)",
            sets: 3,
            reps: 10,
            weight: 0,
          },
          {
            name: "T-Bar Row (Upper Back Emphasis)",
            sets: 3,
            reps: 10,
            weight: 0,
          },
          { name: "Shrugs", sets: 3, reps: 10, weight: 0 },
        ],

        Wednesday: [
          { name: "Squats", sets: 3, reps: 10, weight: 0 },
          { name: "Seated Hamstring Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Leg Extensions", sets: 3, reps: 10, weight: 0 },
          { name: "Calf Raises", sets: 3, reps: 10, weight: 0 },
        ],

        Thursday: [
          { name: "Shoulder Press", sets: 3, reps: 10, weight: 0 },
          { name: "Lateral Raises", sets: 3, reps: 10, weight: 0 },
          { name: "Front Raises", sets: 3, reps: 10, weight: 0 },
          { name: "Rear Flys", sets: 3, reps: 10, weight: 0 },
        ],

        Friday: [
          { name: "Tricep Pushdown", sets: 3, reps: 10, weight: 0 },
          { name: "Overhead Extensions", sets: 3, reps: 10, weight: 0 },
          { name: "Dips", sets: 3, reps: 10, weight: 0 },
          { name: "Preacher Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Hammer Curls", sets: 3, reps: 10, weight: 0 },
        ],

        Saturday: [[]],

        Sunday: [[]],
      },

      FullBody: {
        Monday: [
          { name: "Incline Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Front Raises", sets: 3, reps: 10, weight: 0 },
          { name: "Dips", sets: 3, reps: 10, weight: 0 },
          { name: "Chest Supported Rows", sets: 3, reps: 10, weight: 0 },
          { name: "Preacher Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Calf Raises", sets: 3, reps: 10, weight: 0 },
        ],

        Tuesday: [],

        Wednesday: [
          { name: "Close Grip Lat Pulldown", sets: 3, reps: 10, weight: 0 },
          { name: "Rear Delt Flys", sets: 3, reps: 10, weight: 0 },
          { name: "Cable Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Shrugs", sets: 3, reps: 10, weight: 0 },
          { name: "Seated Hamstring Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Flat Machine Chest Press", sets: 3, reps: 10, weight: 0 },
          { name: "Overhead Tricep Extensions", sets: 3, reps: 10, weight: 0 },
        ],

        Thursday: [],

        Friday: [
          { name: "Cable Lateral Raises", sets: 3, reps: 10, weight: 0 },
          { name: "Tricep Pressdown (Bar)", sets: 3, reps: 10, weight: 0 },
          { name: "Seated Cable Curls", sets: 3, reps: 10, weight: 0 },
          { name: "Pec Deck", sets: 3, reps: 10, weight: 0 },
          { name: "Lat Pulldowns", sets: 3, reps: 10, weight: 0 },
          { name: "Leg Extensions", sets: 3, reps: 10, weight: 0 },
        ],

        Saturday: [],

        Sunday: [],
      },
      Custom: {
        Monday: [],

        Tuesday: [],

        Wednesday: [],

        Thursday: [],

        Friday: [],

        Saturday: [],

        Sunday: [],
      },
    },
  };

  try {
    const workout = new Workout(workoutPlans);
    await workout.save();
    console.log("Workout plan created successfully!");
  } catch (error) {
    console.error("Error creating workout plan:", error.message);
  }
};
