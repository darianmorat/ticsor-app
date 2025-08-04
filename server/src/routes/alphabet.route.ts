import express from "express";
import { getAlphabet } from "../controllers/alphabet.contoller";

const router = express.Router();

router.get("/get-all", getAlphabet);

export default router;
