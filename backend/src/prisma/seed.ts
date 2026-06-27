import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })
async function seed() {
    try {
        await prisma.exercise.deleteMany();
        await prisma.exercise.createMany({
        data: [
            {
                name: 'Pull-ups',
                muscleGroup: 'Pull',
                category: 'Calisthenics',
                image: 'https://via.placeholder.com/150/1f2937/FFFFFF?text=Pull-up'
            },
            {
                name: 'Dips',
                muscleGroup: 'Push',
                category: 'Calisthenics',
                image: 'https://via.placeholder.com/150/1f2937/FFFFFF?text=Dips'
            },
            {
                name: 'Pistol Squats',
                muscleGroup: 'Legs',
                category: 'Calisthenics',
                image: 'https://via.placeholder.com/150/1f2937/FFFFFF?text=Pistol+Squat'
            },
            {
                name: 'Front Lever Hold',
                muscleGroup: 'Core',
                category: 'Calisthenics',
                image: 'https://via.placeholder.com/150/1f2937/FFFFFF?text=Front+Lever'
            },
            {
                name: 'Kettlebell Swing',
                muscleGroup: 'Legs',
                category: 'Kettlebell',
                image: 'https://via.placeholder.com/150/f59e0b/FFFFFF?text=KB+Swing'
            },
            {
                name: 'Turkish Get-Up',
                muscleGroup: 'Full Body',
                category: 'Kettlebell',
                image: 'https://via.placeholder.com/150/f59e0b/FFFFFF?text=TGU'
            },
            {
                name: 'Goblet Squat',
                muscleGroup: 'Legs',
                category: 'Kettlebell',
                image: 'https://via.placeholder.com/150/f59e0b/FFFFFF?text=Goblet'
            },
            {
                name: 'Kettlebell Snatch',
                muscleGroup: 'Full Body',
                category: 'Kettlebell',
                image: 'https://via.placeholder.com/150/f59e0b/FFFFFF?text=KB+Snatch'
            },
            {
                name: 'Barbell Deadlift',
                muscleGroup: 'Legs',
                category: 'Weightlifting',
                image: 'https://via.placeholder.com/150/ef4444/FFFFFF?text=Deadlift'
            },
            {
                name: 'Overhead Press (OHP)',
                muscleGroup: 'Push',
                category: 'Weightlifting',
                image: 'https://via.placeholder.com/150/ef4444/FFFFFF?text=OHP'
            },
            {
                name: 'Barbell Back Squat',
                muscleGroup: 'Legs',
                category: 'Weightlifting',
                image: 'https://via.placeholder.com/150/ef4444/FFFFFF?text=Back+Squat'
            }
        ]
    });
    console.log("Database seeding completed.")   
    } catch (error) {
        console.error("Error occurred while seeding the database:", error);
    }
}
seed()
    .then(() => {
        console.log("Seeding process finished successfully.");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Seeding process failed:", error);
        process.exit(1);
    });

