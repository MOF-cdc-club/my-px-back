import express from 'express';
import bodyParser from 'body-parser'
import cookiePaser from 'cookie-parser';
import db from '../../models/Index.js'
import crypto from 'crypto';


const User = db.User;
var router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//로그인 기능: POST http://www.domain.com/login으로 받아온 정보, login은 따로 페이지가 필요 없습니다. home에서 받아오게끔 설계
router.post('/', (req, res) => {
	console.log('check');
	
	db.User.findOne({
		where: { id: req.body.id },
	})
		.then((user) => {
			var inputPassword = req.body.password;
			var salt = user.salt;
			var hashPassword = crypto.createHash('sha512').update(inputPassword + salt).digest('hex');

			if (user.password != hashPassword) {
				console.log('로그인 실패!', salt, "비번\n", hashPassword, user);
				return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
			}
			/*
		   user.comparePassword(req.body.password, (err, isMatch) => {

      if (!isMatch)

		  
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
		  */
			console.log('로그인 성공!');
		})
		.catch((err) => {
			console.log(err);
			return res.json({ loginSuccess: false, message: '해당하는 유저가 없습니다.' });
		});
});


router.get('/', function (req, res) {
  res.send('GET request to the loginrpage');
});
export default router;
