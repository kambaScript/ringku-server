import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import swaggerOptions from './app/config/swaggerOptions';
import { userRouter } from './app/module/users/routes/users.routes';
config();
const main = async () => {
  const app = express();
  app.use(express.static('public'));
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(express.json());
  app.use(userRouter);

  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(` Server is 🚀 on Port  http://localhost:${port}`),
  );
};
main();
