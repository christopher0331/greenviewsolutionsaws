const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
   res.send(200);
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
})
