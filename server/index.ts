import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/greeting', (req: Request, res: Response) => {
  console.log(req.query.name);
  if (req.query.name) {
    res.send(`Hello, ${req.query.name}! Have a great day!`);
  } else {
    res.send('Hello, please enter your name for a custom greeting!');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
