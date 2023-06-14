import { Request, Response } from 'express';
import CustomError from './customError';

const appLog = async (error: Error) => {
  // Log the error to the console, sentry or whatever we want
  console.log(error);
};

const errorHandler = (
  error: any,
  req: Request,
  res: Response
) => {  
  if (error instanceof CustomError) {
    return res.status(400).json({ error: error.message });
  }

  // Log the error to the console
  if (process.env.NODE_ENV !== 'test') {
    appLog(error);
  }

  return res.status(500).json({ error: 'Internal server error.' });
};

export default errorHandler;