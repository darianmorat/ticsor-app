import express from "express";
import {
   getModule,
   getPracticedLessons,
   setCompleteLesson,
} from "../controllers/module.contoller";
import { privateRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/get-all", getModule);
router.get("/get-all-completed-lessons", getPracticedLessons);
router.post("/set-complete-lesson", privateRoute, setCompleteLesson);

export default router;
