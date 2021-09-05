import express from 'express';
import cookiePaser from 'cookie-parser';
import db from '../../models/Index.js'
import bodyParser from 'body-parser'
import crypto from 'crypto';

const User = db.User;
var router = express.Router();

//bodyParser사용
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//회원가입 기능: http://www.domain.com/register 에서 post로 받아온 정보, /register 프론트를 만들어주세요.
router.post('/', (req, res) => {
	var inputPassword = req.body.password;
	console.log('register posting2');
	var salt = Math.round((new Date().valueOf() * Math.random())) + "";
	console.log('register posting3');
	var hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");
	
	db.User.create({
		id: req.body.id,
		password: hashPassword,
		salt: salt,
		name: req.body.name,
		email: req.body.email,
		serial_number: req.body.serial_number,
		expire_date: req.body.expire_date,
		rank: req.body.rank,
	})
	.then((items) => {
		res.json(items);
		console.log('user create success');
	})
	.catch((err) => {
		console.log('user create fail');
		console.log(err);
		
	})
	
})

router.get('/', function (req, res) {
  res.send('GET request to the registerpage');
});

export default router;
