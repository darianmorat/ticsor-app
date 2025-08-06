import express from "express";
import { privateRoute } from "../middleware/auth.middleware";
import { addCompletedLesson, getCompletedLessons } from "../controllers/lesson.contoller";

const router = express.Router();

router.get("/get-all-completed", getCompletedLessons);
router.post("/add-completed", privateRoute, addCompletedLesson);

export default router;
