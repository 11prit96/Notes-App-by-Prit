import "express-async-errors"
import * as dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
import morgan from "morgan"
import mongoose from "mongoose"
import cookieParser from 'cookie-parser';
import cloudinary from "cloudinary"

// routers
import notesRouter from "./routes/notesRouter.js"
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"

// middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js"
import { authenticateUser } from "./middlewares/authMiddleware.js"

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));

app.use(cookieParser());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world..')
})

app.use('/api/notes', authenticateUser, notesRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', authenticateUser, userRouter)


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'Route not found.' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Server Running on port ${port}`))
} catch (error) {
    console.log(error);
    process.exit(1)
}
