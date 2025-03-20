import express from "express";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welome to subscription tracker API')
});

app.listen(3000, async () => {
    console.log(`Subscription tracker API is running on https://localhost:${PORT}`);
    await connectToDatabase();
})

export default app;
