const debug = require('debug');
const pkg = require('../../package.json');
const path = require('path');

module.exports = file => debug(`${ pkg.name }:${ path.basename(file, '.js') }`);
