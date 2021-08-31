import express from 'express';
//import app from 'express';
var router = express.Router();
import path from 'path';
import index from './index.js';
import product from './product.js';
import user from './user.js';

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.use("/index", index);
router.use("/product", product);

export default router;
