import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repository/users.repository";

export async function listUser(req: Request, res: Response) {
    try {
  
        const users = await userRepository.findAll()
        return res.status(200).json({ users });
     
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }
