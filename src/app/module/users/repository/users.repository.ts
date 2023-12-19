import { prisma } from '@config/prisma';

import { IUser } from '../@types/user.schema';
class UserRepository {
  async create(data: IUser) {
    const user = await prisma.user.create({ data });
    return user;
  }
}
export const userRepository = new UserRepository();
