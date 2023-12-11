import { Request, Response, Router } from 'express';
export const usersRoutes = Router();

usersRoutes.get('/', (req: Request, res: Response) => {
  res.send('hello users');
});
usersRoutes.put('/:id');
