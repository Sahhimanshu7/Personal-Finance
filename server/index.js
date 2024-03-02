import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import "./config/mongo.js";
import { rateLimiterUsingThirdParty } from "./middleware/rateLimit.js";
import fourOhFour from "./middleware/fourOhFour.js";

import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));

app.use(rateLimiterUsingThirdParty);

const PORT = process.env.PORT || 8080;

// Implement routes

// Auth Routes
app.use("/api/auth/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

// Apply error handling last
app.use(fourOhFour);
