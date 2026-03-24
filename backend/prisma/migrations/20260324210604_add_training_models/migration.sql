/*
  Warnings:

  - You are about to drop the column `muscle_group` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `time_based` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `training_style` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `category` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `muscleGroup` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "muscle_group",
DROP COLUMN "time_based",
DROP COLUMN "training_style",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "muscleGroup" TEXT NOT NULL,
ADD COLUMN     "timeBased" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Exercise_id_seq";

-- DropIndex
DROP INDEX "Exercise_id_key";

-- CreateTable
CREATE TABLE "WorkoutSession" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "duration" INTEGER,

    CONSTRAINT "WorkoutSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseSet" (
    "id" TEXT NOT NULL,
    "reps" INTEGER,
    "weight" DOUBLE PRECISION,
    "restTime" INTEGER,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "exerciseId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,

    CONSTRAINT "ExerciseSet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExerciseSet" ADD CONSTRAINT "ExerciseSet_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSet" ADD CONSTRAINT "ExerciseSet_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "WorkoutSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
