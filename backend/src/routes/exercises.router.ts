import { Router } from "express";
import exercisesController from "../controllers/exercises.controller"

const exercisesRouter = Router();

exercisesRouter.get("/", exercisesController.getExercises)
exercisesRouter.post("/", exercisesController.createExercise)

export default exercisesRouter