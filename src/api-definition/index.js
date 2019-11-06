const mergeOptions = require('merge-options');
const definitions = require('./definition');

const ApiBase = {
  Educational: 'https://things.ubidots.com',
  Industrial: 'https://industrial.ubidots.com',
};

module.exports.ApiBase = ApiBase;
module.exports.api = (baseURL) => {
  const api = {};

  for (const namespace in definitions) {
    api[namespace] = {};
    
    for (const name in definitions[namespace]) {
      api[namespace][name] = mergeOptions(
        { baseURL },
        definitions[namespace][name],
      );
    }
  }

  return api;
};
