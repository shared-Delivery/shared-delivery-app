const usersRouter = require('./users.router');
const companiesRouter = require('./companies.router');
const servicesRouter = require('./services.router');

function routerApi(app) {
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/companies', companiesRouter);
  app.use('/api/v1/services', servicesRouter);
}

module.exports = routerApi;
