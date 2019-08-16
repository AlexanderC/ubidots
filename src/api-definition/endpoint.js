const mergeOptions = require('merge-options');
const path = require('path');
const Response = require('../response');

async function build(def, authToken = null, apiKey = null, ...args) {
  const opts = mergeOptions({}, def);

  opts.url = path.join(opts.basepath || '', opts.path || '');
  delete opts.basepath;
  delete opts.path;

  if (authToken) {
    opts.headers['X-Auth-Token'] = authToken;
  }

  if (def.useAPIKey) {
    opts.headers['X-Ubidots-ApiKey'] = apiKey;
  }

  if (opts.populate && typeof opts.populate === 'function') {
    await opts.populate.call(opts, ...args);
  }

  return opts;
}

module.exports = ext => mergeOptions({
  basepath: 'api/v1.6',
  method: 'GET',
  path: '',
  useAPIKey: false,
  headers: {
    'X-Auth-Token': '',
    'X-Ubidots-ApiKey': '',
  },
  async populate(opts) {
    if (this.method.toLowerCase() === 'get') {
      this.params = opts || {};
    } else {
      this.data = opts || {};
    }
  },
  build,
  validateStatus: Response.isStatusOk,
  process: data => data,
}, ext);
