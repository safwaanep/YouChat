var express = require('express')
var router = express.Router()

/* Jrajoute une liste pour les rooms */
const list = [{
  name: 'Room1 : Fans de pêche'
}, {
  name: 'Room2 : Politique'
}, {
  name: 'Room3 : Humour'
}, {
  name: 'Room4 : Fans de foot'
}]

/* Jrecupere les differentes rooms */
router.get('/list', (req, res) => {
	console.log(this.list + " : " + list)
  res.json(list)
})

/* Jles affiche */
router.post('/list', (req, res) => {
  list.push({
    name: req.body.name
  })
  res.send('OK')
})




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
