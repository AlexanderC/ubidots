const axios = require('axios');
const promiseRetry = require('promise-retry');
const debug = require('./utils/debug')(__filename);
const Response = require('./response');

class Endpoint {
  /**
   * @param {string} name
   * @param {*} definition
   * @param {string} token
   * @param {string} key
   * @param {object} opts
   */
  constructor(name, definition, token, key, opts) {
    this.name = name;
    this.definition = definition;
    this.token = token;
    this.key = key;
    this.opts = opts;

    debug(`endpoint:${ this.name }`, this.definition);
  }

  /**
   * Trigger the request to the endpoint
   * @param  {...any} args
   * @returns {Response}
   */
  async call(...args) {
    const { name } = this;
    const opts = await this.definition.build(
      this.definition,
      this.token,
      this.key,
      ...args,
    );

    debug(`call:${ name }`, opts);

    let response = null;

    try {
      const result = await promiseRetry(this.opts.backoff, async (retry, number) => {
        debug(`call:${ name }:try:${ number }`, opts);

        const response = await axios.request(opts);

        return response.status === 429 ? retry(response) : response;
      });

      response = new Response(this, opts, null, result);
    } catch (error) {
      response = new Response(this, opts, error, null);
    }

    debug(`response:${ name }`, response.toJSON());

    return response;
  }
}

module.exports = Endpoint;
