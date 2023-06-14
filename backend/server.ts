import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import errorHandler from './src/errors/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
