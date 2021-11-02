const usersRouter = require('./users.router');
const companiesRouter = require('./companies.router');

function routerApi(app) {
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/companies', companiesRouter);
}

module.exports = routerApi;
