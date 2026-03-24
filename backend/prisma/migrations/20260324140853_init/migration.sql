-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "muscle_group" TEXT NOT NULL,
    "time_based" BOOLEAN NOT NULL,
    "training_style" TEXT NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_id_key" ON "Exercise"("id");
