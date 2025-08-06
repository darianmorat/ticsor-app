import express from "express";
import {
   addCompletedLetter,
   getAlphabet,
   getCompletedAlphabet,
} from "../controllers/alphabet.contoller";
import { privateRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/get-all", getAlphabet);
router.get("/get-all-completed", getCompletedAlphabet);
router.post("/add-completed", privateRoute, addCompletedLetter);

export default router;
