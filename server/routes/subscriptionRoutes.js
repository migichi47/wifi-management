import express from "express";
import { addNewSubscription } from "../controllers/subscriptionControllers.js";

const router = express();

router.post("/", addNewSubscription);
export default router;
