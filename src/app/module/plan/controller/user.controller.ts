import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

import { autenticationService } from '../../authentication/authentication';
import { IUserDTO } from '../dto/user.dto';
import { userRepository } from '../repository/users.repository';
import { UserService } from '../user.service';

export async function users(req: Request, res: Response) {
  try {
    const users = await userRepository.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create user.' });
  }
}
export async function user(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await userRepository.findBYId(id);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create user.' });
  }
}
export async function create(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const saltOrRounds = 10;
    const hashing = await bcrypt.hash(password, saltOrRounds);
    const data: IUserDTO = {
      name: name,
      email: email,
      password: hashing,
    };
    const validation = await UserService.validationUser(data);
    if (validation.isValid) {
      const user = await userRepository.create(data);
      const token = await autenticationService.token(
        user,
        process.env.SECRET_KEY || '@@123@@',
      );
      return res.status(201).json({ token });
    } else {
      return res.status(401).json({ message: validation.message });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to create user.' });
  }
}
