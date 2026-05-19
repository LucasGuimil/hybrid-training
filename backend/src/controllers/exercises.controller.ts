import type { Request, Response } from "express"
import { prisma } from "../config/database"
import type { Exercise } from "../generated/prisma/client"

const getExercises = async (req: Request, res: Response) => {
    try {
        const exercises = await prisma.exercise.findMany()
        res.status(200).json(exercises)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch exercises" })
    }
}
const createExercise = async (req: Request, res: Response) => {
    const newExercise: Exercise = req.body;
    if (!newExercise.name || !newExercise.muscleGroup || !newExercise.category) {
        return res.status(400).json({ error: "Missing required fields" })
    }
    const existingExercise = await prisma.exercise.findFirst({ where: { name: newExercise.name } })
    if (existingExercise) {
        return res.status(400).json({ error: "Exercise already exists" })
    }
    try {
        const exercise = await prisma.exercise.create({ data: { ...newExercise } })
        res.status(201).json(exercise)
    } catch (error) {
        res.status(500).json({ error: "Failed to create exercise" })
    }
}
export default {
    getExercises,
    createExercise
}   
