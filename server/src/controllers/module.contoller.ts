import { Request, Response } from "express";
import { moduleService } from "../services/module.service";

export const getModules = async (_req: Request, res: Response) => {
   try {
      const modules = await moduleService.getAll();

      res.status(200).json({
         success: true,
         modules: modules,
      });
   } catch {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
