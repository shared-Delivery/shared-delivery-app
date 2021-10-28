const usersRouter = require('./users.router');

function routerApi(app) {
  app.use('/api/v1/users', usersRouter);
}

module.exports = routerApi;
