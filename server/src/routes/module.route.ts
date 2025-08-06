import express from "express";
import { getModules } from "../controllers/module.contoller";

const router = express.Router();

router.get("/get-all", getModules);

export default router;
