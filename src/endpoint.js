const axios = require('axios');
const debug = require('./utils/debug')(__filename);
const Response = require('./response');

class Endpoint {
  /**
   * @param {string} name
   * @param {*} definition
   * @param {string} token
   * @param {string} apiToken
   */
  constructor(name, definition, token, apiToken) {
    this.name = name;
    this.definition = definition;
    this.token = token;
    this.apiToken = apiToken;

    debug(`endpoint:${this.name}`, this.definition);
  }

  /**
   * Trigger the request to the endpoint
   * @param  {...any} args
   * @returns {Response}
   */
  async call(...args) {
    const opts = await this.definition.build(
      this.definition,
      this.token,
      this.apiToken,
      ...args
    );

    debug(`call:${this.name}`, opts);

    let response = null;

    try {
      response = new Response(this, opts, null, await axios.request(opts));
    } catch (error) {
      response = new Response(this, opts, error, null);
    }

    debug(`response:${this.name}`, response.toJSON());

    return response;
  }
}

module.exports = Endpoint;
