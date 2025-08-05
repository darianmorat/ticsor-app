import express from "express";
import { getAlphabet, getPracticedLetters, setComplete } from "../controllers/alphabet.contoller";
import { privateRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/get-all", getAlphabet);
router.get("/get-all-completed", getPracticedLetters);
router.post("/set-complete", privateRoute, setComplete);

export default router;
