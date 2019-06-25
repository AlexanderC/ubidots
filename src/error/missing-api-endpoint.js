const BaseError = require('./base');

class MissingApiEndpointError extends BaseError {
  /**
   * @param {string} namespace 
   * @param {string} endpoint 
   */
  constructor(namespace, endpoint) {
    super(`Missing API endpoint "${ namespace }:${ endpoint }"`);
  }
}

module.exports = MissingApiEndpointError;
