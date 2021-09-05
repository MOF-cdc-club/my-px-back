//home에서는 로그인과 회원가입, 비밀번호 찾기,  쿠키 세션을 담당합니다.
import express from 'express';
import cookiePaser from 'cookie-parser';
import db from '../../models/Index.js'

import login from './login.js';
import register from './register.js';

var router = express.Router();

router.use('/login', login);
router.use('/register', register);
router.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

export default router;
