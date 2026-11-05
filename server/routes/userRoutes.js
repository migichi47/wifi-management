import express from "express";
import {
  addNewUser,
  fetchUsers,
  fetchUserWithId,
} from "../controllers/userControllers.js";

const router = express();

router.post("/", addNewUser);
router.get("/", fetchUsers);
router.get("/:id", fetchUserWithId);

export default router;
