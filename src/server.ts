import express from 'express'
import bodyParser from "body-parser";
import { config } from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './app/config/swaggerOptions';
import session, { SessionOptions } from 'express-session';
import cors from 'cors';
import { userRouter } from './app/module/users/routes/users.routes';
import { errorHandler } from './app/utils/error';
import { MESSAGE, PORT } from './app/utils/server.config';

config();
const main = async () => {
 const app = express();
  app.use(
    session({
      secret: process.env.SESSION_PASSWORD || "Testando@##123",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure:false,
        maxAge: 60 * 60 * 1000, 
      },
    } as SessionOptions));

  app.use(express.static("public"));
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(express.json());
  app.use(userRouter);

  app.use(function  (req,res,next){
    res.send("Esta Rota Não existe")
}) 
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`http://localhost:${port}`));
};
main();


