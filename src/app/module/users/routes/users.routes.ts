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

 * /users/{id}:
 *   get:
 *     description: Obtém um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser obtido
 *         schema:
 *           type: string  # Dependendo do tipo do ID ( string), ajuste o tipo aqui
 *     responses:
 *       200:
 *         description: Sucesso ao obter o usuário
 *       404:
 *         description: Usuário não encontrado
 */

userRouter.get('/users/:id', userController.user);
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar usuário por ID
 *     description: Atualiza os dados de um usuário existente com base no ID fornecido.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID do usuário a ser atualizado
 *         required: true
 *         schema:
 *           type: string  # Dependendo do tipo do ID (int, string, etc.), ajuste o tipo aqui
 *       - in: body
 *         name: body
 *         description: Novos dados do usuário.
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
 *           name: "Novo Nome do Usuário"
 *           email: "novousuario@example.com"
 *           password: "novasenha123"
 *     responses:
 *       200:
 *         description: Dados do usuário atualizados com sucesso
 *       400:
 *         description: Requisição inválida - verifique os parâmetros enviados
 *       404:
 *         description: Usuário não encontrado
 */

userRouter.put('/users/:id', userController.update);
export { userRouter };
