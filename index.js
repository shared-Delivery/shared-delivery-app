const express = require('express');
const app = express();
const PORT = 3000;
const routerApi = require('./routes/index');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);

app.use(errorHandler);

app.use('/hola', express.static('./public/index.html'));

app.listen(PORT, () => {
  console.log('Nodemon');
});
