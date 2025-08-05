import { Request, Response } from "express";
import { moduleService } from "../services/module.service";
import { AuthRequest } from "../types/auth";

export const getModule = async (_req: Request, res: Response) => {
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

export const getPracticedLessons = async (_req: Request, res: Response) => {
   try {
      const lessons = await moduleService.getAllCompletedLesson();

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

export const setCompleteLesson = async (req: AuthRequest, res: Response) => {
   try {
      const { lessonId, completed } = req.body;
      const { userId } = req.user;

      const newLesson = await moduleService.setLessonComplete(
         lessonId,
         userId,
         completed,
      );

      res.status(200).json({
         success: true,
         newLesson: newLesson,
      });
   } catch {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
