import express from 'express';
import excercisesRouter from './routes/excercises.router';
const app = express();
app.use(express.json());
app.use("/api/excercises", excercisesRouter)
export default app;