import { dbConnection } from './config/database.js';
import app from './app.js';
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
