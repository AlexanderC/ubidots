const Endpoint = require('./endpoint');
const debug = require('./utils/debug')(__filename);
const MissingApiEndpointError = require('./error/missing-api-endpoint');

class Api {
  /**
   * @param {string} namespace
   * @param {*} endpoints
   * @param {string} token
   * @param {string} apiToken
   */
  constructor(namespace, endpoints, token, apiToken) {
    this.namespace = namespace;
    this._endpoints = endpoints;
    this.token = token;
    this.apiToken = apiToken;

    debug(`endpoints:${this.namespace}`, this.endpoints);
  }

  /**
   * Create endpoint instance
   * @param {string} endpoint
   * @returns {Endpoint}
   */
  endpoint(endpoint) {
    if (!this.exists(endpoint)) {
      throw new MissingApiEndpointError(this.namespace, endpoint);
    }

    return new Endpoint(
      `${this.namespace}:${endpoint}`,
      this._endpoints[endpoint],
      this.token,
      this.apiToken
    );
  }

  /**
   * Check if api endpoint exists
   * @param {string} endpoint
   * @returns {boolean}
   */
  exists(endpoint) {
    return this._endpoints.hasOwnProperty(endpoint);
  }

  /**
   * Get the list of available API endpoints
   * @returns {string[]}
   */
  get endpoints() {
    return Object.keys(this._endpoints);
  }
}

module.exports = Api;
