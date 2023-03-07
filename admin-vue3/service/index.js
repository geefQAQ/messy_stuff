const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const team = require('../router/team');
const player = require('../router/player');
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded());
// app.use(express.json());
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});
app.use('/api', team);
app.use('/api', player);
// app.use('/api', );
app.get('/test', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  res.send('hi');
})

app.listen(3000, () => {
  console.log('service listening on Port 3000')
})