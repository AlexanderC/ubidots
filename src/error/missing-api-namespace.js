const BaseError = require('./base');

class MissingApiNamespaceError extends BaseError {
  /**
   * @param {string} namespace 
   */
  constructor(namespace) {
    super(`Missing API namespace "${ namespace }"`);
  }
}

module.exports = MissingApiNamespaceError;
