import express from "express";
import { getModule } from "../controllers/module.contoller";

const router = express.Router();

router.get("/get-all", getModule);

export default router;
