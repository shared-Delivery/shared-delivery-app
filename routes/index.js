const usersRouter = require('./users.router');
const companiesRouter = require('./companies.router');
const servicesRouter = require('./services.router');
const userTypesRouter = require('./userTypes.router');

function routerApi(app) {
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/companies', companiesRouter);
  app.use('/api/v1/services', servicesRouter);
  app.use('/api/v1/types', userTypesRouter);
}

module.exports = routerApi;
