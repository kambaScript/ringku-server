/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { AppError } from './appError';

type ErrorHandlerMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => Response<unknown, Record<string, unknown>> | void;

export const errorHandler: ErrorHandlerMiddleware = (
  error,
  request,
  response,
  next,
) => {
  if (error instanceof AppError) {
    return response
      .status(error.statusCode)
      .json({ status: 'error', message: error.message });
  }

  // eslint-disable-next-line no-console
  console.error(error);
  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
};
