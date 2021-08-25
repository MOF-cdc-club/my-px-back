var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/getTest', async(req, res) => {
	try{
		res.set('Content-Type','text/html');
			res.send(new Buffer('<form action="/create_process" method="post">  <p><input type="text" name="title" placeholder="title"></p> <p>  <textarea name="description" placeholder="description"></textarea> </p> <p>   <input type="submit">  </p> </form>'));
	} catch (err) {
		console.log(err);
		res.send({
			error: 'can"t read api data',
		});
	}
});

router.post('/create_process', async(req,res) => {
	try{
		console.log(req.body);
		res.send({
			msg: 'Hi!' + req.body.name
		});
	} catch (err) {
		console.log(err);
		res.send({
			error: 'can"t read api data',
		});
	}
});


module.exports = router;
