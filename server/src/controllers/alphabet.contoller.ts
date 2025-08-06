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

export const getCompletedAlphabet = async (_req: Request, res: Response) => {
   try {
      const letters = await alphabetService.getAllCompleted();

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

export const addCompletedLetter = async (req: AuthRequest, res: Response) => {
   try {
      const { letterId } = req.body;
      const { userId } = req.user;

      const letter = await alphabetService.addCompleted(letterId, userId);

      res.status(200).json({
         success: true,
         letter: letter,
      });
   } catch {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
