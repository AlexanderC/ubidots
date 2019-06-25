const ApiError = require('./error/api');

class Response {
  /**
   * @param {endpoint} endpoint
   * @param {*} opts
   * @param {axios.AxiosError} error
   * @param {axios.AxiosResponse} response 
   */
  constructor(endpoint, opts, error, response) {
    this.endpoint = endpoint;
    this.opts = opts;
    this._error = error;
    this._response = response;
  }

  /**
   * Response data
   * @returns {*}
   */
  get data() {
    if (!this._response) {
      return null;
    }

    const data = this._response.data || {};
    const processor = this.endpoint.definition.process;

    if (processor && typeof processor === 'function') {
      return processor(data);
    }

    return data;
  }

  /**
   * Check if is an error response
   * @return {boolean}
   */
  get isError() {
    return this._error
      || this._response.status === 403 // Unauthorized
      || this._response.status === 400; // Invalid Payload
  }

  /**
   * API Error
   * @returns {ApiError}
   */
  get error() {
    if (!this.isError) {
      return null;
    }

    return new ApiError(
      this.endpoint,
      this._error || { response: this._response },
    );
  }

  /**
   * Check if status is an error
   * @param {number} status
   * @returns {boolean} 
   */
  static isStatusOk(status) {
    return status !== 404 && status < 500;
  }

  /**
   * Get string representation of response object
   * @returns {string}
   */
  toJSON() {
    const { error, data, opts } = this;

    return { error, data, opts };
  }
}

module.exports = Response;
