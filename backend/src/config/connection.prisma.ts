import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL})
export const prisma = new PrismaClient({adapter})

export const dbConnection = async () => {
    try {
        await prisma.$connect()
        console.log("Database connection successful")
    } catch (error) {
        console.error("Database connection failed:", error)
        process.exit(1)
    }   
}

