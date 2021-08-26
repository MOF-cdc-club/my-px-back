import './pre-start'; // Must be the first import
import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import BaseRouter from './routes';
const app = express();


app.use(express.urlencoded({extended: true}));


app.use(json());
app.get('/', (req: Request, res: Response) => {
  res.send({
    msg: 'Hello, World!',
  });
});

//set Router
app.use('/api', BaseRouter);



// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});

