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

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
})
