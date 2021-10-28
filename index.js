const express = require('express');
const app = express();
const PORT = 3000;
const routerApi = require('./routes/index');

app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
  res.json({
    message: 'Hiiii',
  });
});

app.listen(PORT, (req, res) => {
  console.log('Node Express.js');
});
