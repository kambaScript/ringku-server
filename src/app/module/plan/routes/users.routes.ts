import { Router } from 'express';

import * as userController from '../controller/user.controller';
const userRouter = Router();
/**
 * @swagger
 * /users:
 *   get:
 *     description: Lista todos os Usuários
 *     responses:
 *       200:
 *         description: Sucesso
 */
userRouter.get('/users', userController.users);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar usuário
 *     description: Cria um novo usuário com os dados fornecidos.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Dados do usuário a serem adicionados.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *               format: email
 *             password:
 *               type: string
 *               format: password
 *         example:
 *           name: "Nome do usuário"
 *           email: "usuario@example.com"
 *           password: "senha123"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida - verifique os parâmetros enviados
 */

userRouter.post('/users', userController.create);
/**
 * @swagger
 * /users:
 *   get:
 *     description: Lista todos os Usuários
 *     responses:
 *       200:
 *         description: Sucesso
 */
userRouter.get('/user/:id', userController.user);
export { userRouter };
