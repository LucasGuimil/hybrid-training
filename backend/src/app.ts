import express from 'express';
import exercisesRouter from './routes/exercises.router';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/exercises", exercisesRouter)
export default app;