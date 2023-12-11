import { Router } from 'express';

import { usersRoutes } from '../module/users/routes/users.routes';

export const routes = Router();

routes.use('/users', usersRoutes);
