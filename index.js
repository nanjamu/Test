const multer = require('multer')
const upload = multer()
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/audience', (req, res) => res.render('pages/audience'))
  .get('/prescreen', (req, res) => res.render('pages/prescreen'))
  .post('/submit_survey', upload.none(), function(req, res){	
	res.send(req.body);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function showTimes() {
  const times = process.env.TIMES || 5
  let result = ''
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  return result
}
