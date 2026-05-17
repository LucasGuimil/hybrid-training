import { Router } from "express";
import excercisesController from "../controllers/exercises.controller"

const excercisesRouter = Router();

excercisesRouter.get("/", excercisesController.getExercises)

export default excercisesRouter