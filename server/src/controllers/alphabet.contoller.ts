import { Request, Response } from "express";
import { alphabetService } from "../services/alphabet.service";
import { AuthRequest } from "../types/auth";

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

export const getPracticedLetters = async (_req: Request, res: Response) => {
   try {
      const letters = await alphabetService.getAllPracticed();

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

export const setComplete = async (req: AuthRequest, res: Response) => {
   try {
      const { letterId } = req.body;
      const { userId } = req.user;

      const newLetter = await alphabetService.setLetterComplete(letterId, userId);

      res.status(200).json({
         success: true,
         newLetter: newLetter,
      });
   } catch {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
