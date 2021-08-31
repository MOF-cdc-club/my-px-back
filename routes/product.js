import express from 'express';
var router = express.Router();
//import Product from '../models/Product.js';
//import {Product} from '../models/Index.js';
import db from '../models/Index.js'
const Product = db.Product;
// 전체 상품을 가져옴
router.get('/', (req, res, next) => {
	Product.findAll()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		});
});

//카테고리별로 상품을 가져옴 /category?kinds=liquor
router.get('/category', function (req, res, next) {
	Product.findAll({
		where: {
			category: req.query.kinds,
		},
	})
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		});
});
export default router;
