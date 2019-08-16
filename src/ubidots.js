const mergeOptions = require('merge-options');

const { ApiBase, api: apigen } = require('./api-definition');
const Api = require('./api');
const debug = require('./utils/debug')(__filename);
const MissingApiNamespaceError = require('./error/missing-api-namespace');

class Ubidots {
  /**
   * @param {*} api
   * @param {object} opts
   * @param {object} opts.backoff - backoff options
   * @param {number} opts.backoff.retries - amount of retries
   * @param {number} opts.backoff.minTimeout - minimum amount of time between retries
   * @param {number} opts.backoff.factor - factor of the timeout between retries
   */
  constructor(api, opts) {
    this._api = api;
    this.token = null;
    this.key = null;
    this.opts = opts;

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
      this.key,
      this.opts,
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
   * @param {object} opts
   * @param {object} opts.backoff - backoff options
   * @param {number=} opts.backoff.retries - amount of retries
   * @param {number=} opts.backoff.minTimeout - minimum amount of time between retries
   * @param {number=} opts.backoff.factor - factor of the timeout between retries
   * @returns {Ubidots}
   */
  static create(baseURL = ApiBase.Industrial, opts = Ubidots.DEFAULT_CONFIG) {
    debug('client', baseURL);

    const api = apigen(baseURL);

    const mergedOpts = mergeOptions(this.DEFAULT_CONFIG, opts);

    return new this(api, mergedOpts);
  }

  /**
   * @returns {{backoff: {minTimeout: number, retries: number, factor: number}}}
   */
  static get DEFAULT_CONFIG() {
    return {
      backoff: {
        retries: 5,
        factor: 1.4,
        minTimeout: 500,
      },
    };
  }
}

module.exports = Ubidots;
