import { Request, Response } from "express";
import { alphabetService } from "../services/alphabet.service";

export const getAlphabet = async (_req: Request, res: Response) => {
   try {
      const letters = await alphabetService.getAll();

      res.status(200).json({
         success: true,
         letters: letters,
      });
   } catch {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
