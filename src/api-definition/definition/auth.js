const endpoint = require('../endpoint');

module.exports = {
  obtainToken: endpoint({
    path: 'auth/token',
    method: 'POST',
    headers: {
      'X-Ubidots-ApiKey': '',
    },
    async populate(apiKey) {
      this.headers['X-Ubidots-ApiKey'] = apiKey;
    },
    process(data) {
      return data.token || null;
    },
  }),
};
