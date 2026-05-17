import type { Request, Response } from "express"
import { prisma } from "../config/database"

const getExercises = async (req: Request, res: Response) => {
    try {
        const exercises = await prisma.exercise.findMany()
        res.status(200).json(exercises)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch exercises" })    
    }
}

export default {
    getExercises
}   
