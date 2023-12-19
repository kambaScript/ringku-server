import prisma from '../../../config/index';
import conexao from '../../../config/index';
import { IUserInterface } from '../types/interface';

export const userRepository = {
  async findAll() {
    try {
      const users = await conexao.user.findMany({
        include: {
          profile: true,
        },
      });
      return users;
    } catch (error) {
      throw new Error(`Erro ao pesquisar : ${error}`);
    }
  },
  async create(data: IUserInterface) {
    try {
      const user = await prisma.user.create({ data });
      return user;
    } catch (error) {
      throw new Error(`Erro ao pesquisar : ${error}`);
    }
  },
  async findByEmail(email: string) {
    try {
      const user = await conexao.user.findUnique({
        where: {
          email: email,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Erro ao pesquisar : ${error}`);
    }
  },
};
