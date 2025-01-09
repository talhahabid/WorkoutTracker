import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { createCustomWorkoutSplit, getWorkout, editWorkout } from "../controllers/workout.controller.js";

const router = express.Router();
router.use(requireAuth);


/* http://localhost:4000/workout/... */

/*
    params: userId
    body: {
        exercise, 
        weight, 
        sets, 
        reps
    }
*/
router.post("/:userId", createCustomWorkoutSplit); 

/*
    params: userId
    body: {
        Nothing
    }
*/
router.get("/:userId", getWorkout);

/*
    params: workoutId
    body: {
        exercise, 
        weight, 
        sets, 
        reps
    }
*/
router.put("/:userId", editWorkout);

/*
    params: workoutId
    body: {
        Nothing
    }
*/
// router.delete("/:_id", deleteWorkout);


export default router;