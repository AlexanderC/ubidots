const auth = require('./auth');
const organization = require('./organization');
const dashboard = require('./dashboard');
const datasource = require('./datasource');
const device = require('./device');
const user = require('./user');
const variable = require('./variable');
const utils = require('./utils');

module.exports = {
  auth,
  organization,
  user, 
  datasource,
  dashboard,
  device,
  variable,
  utils,
};
