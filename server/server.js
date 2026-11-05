import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";

configDotenv();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
  });
};
startServer();

app.use("/api/users", userRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
