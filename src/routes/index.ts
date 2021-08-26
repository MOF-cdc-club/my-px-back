import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';


// exampleRouter
const exampleRouter = Router();
exampleRouter.get('/ctl', exampleController);

//exampleController
export const exampeController = async (req: Request, res: Response): Promise<void> => {
  res.status(200).send(["example"]);
};


// Export the base-router
const baseRouter = Router();
baseRouter.use('/example', exampleRouter);
export default baseRouter;
