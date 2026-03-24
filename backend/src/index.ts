import express from 'express';
import { dbConnection } from './config/connection.prisma';
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

const initializeServer = () => {
    dbConnection()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`)
            })
        })
        .catch((error) => {
            console.error("Failed to initialize server:", error)
        })
}

initializeServer();
