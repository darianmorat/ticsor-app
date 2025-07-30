import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const getUsers = async (_req: Request, res: Response) => {
   try {
      const users = await userService.findAll();

      res.status(200).json({
         success: true,
         users: users,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const getUser = async (req: Request, res: Response) => {
   try {
      const { username } = req.params;
      const user = await userService.find(username);

      if (!user) {
         res.status(404).json({
            success: false,
         });

         return;
      }

      res.status(200).json({
         success: true,
         user: user,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const createUser = async (req: Request, res: Response) => {
   try {
      const { name, username, email, password } = req.body;
      const existingUser = await userService.exists(email, username);

      if (existingUser) {
         if (existingUser.email === email) {
            res.status(409).json({
               success: false,
               message: "Este correo ya está en uso",
            });

            return;
         }

         if (existingUser.username === username) {
            res.status(409).json({
               success: false,
               message: "Este usuario ya está en uso",
            });

            return;
         }
      }

      const user = await userService.create(name, username, email, password);

      res.status(200).json({
         success: true,
         message: `Usuario "${user.name}" creado`,
         newUser: user,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const editUser = async (req: Request, res: Response) => {
   try {
      const { name, username, email, password } = req.body;
      const { id } = req.params;
      const user = await userService.edit(id, name, username, email, password);

      res.status(200).json({
         success: true,
         message: "Información actualizada",
         user: user,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const deleteUser = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const user = await userService.delete(id);

      res.status(200).json({
         success: true,
         message: `Usuario "${user.name}" eliminado`,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
