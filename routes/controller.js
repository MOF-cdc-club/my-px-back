import express from 'express';
//import path from 'path';
import home from './user_manage/home.js';
import product from './product_manage/product.js';


var router = express.Router();

router.use('/home', home);
router.use("/product", product);

export default router;
