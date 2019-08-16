const debug = require('debug');
const path = require('path');
const pkg = require('../../package.json');

module.exports = file => debug(`${ pkg.name }:${ path.basename(file, '.js') }`);
