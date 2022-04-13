const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const routerApi = require('./routes/index');
const { checkApiKey } = require('./middlewares/auth.handler');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

app.use(express.json());
app.use(cors());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);

app.use(errorHandler);

app.use('/holatu', checkApiKey, express.static('./public/index.html'));

app.listen(PORT, () => {
  console.log('Nodemon Yuu');
});
