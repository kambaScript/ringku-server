import { Router } from 'express';
import * as userController from '../controller/user.controller';
const userRouter = Router()


userRouter.get('/users',userController.listUser)
export {userRouter}; 