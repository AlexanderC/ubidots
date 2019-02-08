const { ApiBase, api: apigen } = require('./api-definition');
const Api = require('./api');
const debug = require('./utils/debug')(__filename);
const MissingApiNamespaceError = require('./error/missing-api-namespace');

class Ubidots {
  /**
   * @param {*} api
   */
  constructor(api) {
    this._api = api;
    this.token = null;
    this.key = null;

    debug('namespaces', this.apis);
  }

  /**
   * Authorize Ubidots client
   * @param {string} apiKey
   * @returns {Ubidots}
   */
  async authorize(apiKey) {
    const endpoint = this.api('auth').endpoint('obtainToken');
    const { data: token } = await endpoint.call(apiKey);

    this.token = token;
    this.key = apiKey;

    debug('authorize', token);

    return this;
  }

  /**
   * Create API instance
   * @param {string} namespace
   * @returns {Api}
   */
  api(namespace) {
    if (!this.exists(namespace)) {
      throw new MissingApiNamespaceError(namespace);
    }

    return new Api(
      namespace,
      this._api[namespace],
      this.token,
      this.key
    );
  }

  /**
   * Check if api namespace exists
   * @param {string} namespace
   * @returns {boolean}
   */
  exists(namespace) {
    return this._api.hasOwnProperty(namespace);
  }

  /**
   * Get the list of available APIs
   * @returns {string[]}
   */
  get apis() {
    return Object.keys(this._api);
  }

  /**
   * Get API base url options
   * @returns {*}
   */
  static get ApiBase() {
    return ApiBase;
  }

  /**
   * Create an instance of Ubidots API Client
   * @param {string} baseURL
   * @returns {Ubidots}
   */
  static create(baseURL = ApiBase.Industrial) {
    debug('client', baseURL);

    const api = apigen(baseURL);

    return new this(api);
  }
}

module.exports = Ubidots;
