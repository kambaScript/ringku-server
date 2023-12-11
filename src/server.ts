import express from 'express';

import { routes } from './app/routes';
import { errorHandler } from './app/utils/error';
import { MESSAGE, PORT } from './app/utils/server.config';
const app = express();
app.use(express.json());
app.use(routes);
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(MESSAGE));
