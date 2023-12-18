import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { IUserInterface } from '../users/types/interface';

export const autenticationService = {
  async passConfirmation(senha: string, senha2: string) {
    try {
      return bcrypt.compare(senha, senha2);
    } catch (error) {
      throw new Error(`Erro Interno: ${error}`);
    }
  },

  async token(data: IUserInterface, secretKey: string) {
    try {
      const token = jwt.sign(data, secretKey, { expiresIn: '2h' });
      return token;
    } catch (error) {
      throw new Error(`Erro Interno: ${error}`);
    }
  },
};
