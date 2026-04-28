import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
    cors({
        credentials: true,
        origin: [process.env.FRONTEND_URL as string],
    })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", (_, res) => {
    res.json({
        message: "Welcome to FlickNest API"
    })
})

export default app;
