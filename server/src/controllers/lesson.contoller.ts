import { Request, Response } from "express";
import { AuthRequest } from "../types/auth";
import { lessonService } from "../services/lesson.service";

export const getCompletedLessons = async (_req: Request, res: Response) => {
   try {
      const lessons = await lessonService.getAllCompleted();

      res.status(200).json({
         success: true,
         lessons: lessons,
      });
   } catch {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const addCompletedLesson = async (req: AuthRequest, res: Response) => {
   try {
      const { lessonId } = req.body;
      const { userId } = req.user;

      const lesson = await lessonService.addCompleted(lessonId, userId);

      res.status(200).json({
         success: true,
         lesson: lesson,
      });
   } catch {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
