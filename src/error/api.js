const BaseError = require('./base');

class ApiError extends BaseError {
  /**
   * @param {Endpoint} endpoint 
   * @param {axios.AxiosError} error
   */
  constructor(endpoint, error) {
    super(
      `Request to "${ endpoint.name }" ${ endpoint.token ? 'w/' : 'wo/' } token failed: ${ 
        ApiError.details(error) }`,
    );
  }

  /**
   * Generate error details string
   * @param {axios.AxiosError} error 
   * @returns {string}
   */
  static details(error) {
    if (error.response) {
      let msg = 'Unknown Error';

      if (error.response.data
        && typeof error.response.data === 'object'
      ) {
        switch (error.response.status) {
        case 403:
          msg = error.response.data.detail;
          break;
        case 400:
          // eslint-disable-next-line no-case-declarations
          const issues = [];

          for (const field in error.response.data) {
            issues.push(`${ field } (${ 
              Array.isArray(error.response.data[field])
                ? error.response.data[field].join(', ')
                : error.response.data[field]
            })`);
          }

          msg = `Invalid payload data- ${ issues.join(', ') }`;
          break;
        default: msg = 'Unknown Error';
        }
      }

      return `Failed with status ${ error.response.status }. ${ msg }`;
    } else if (error.request) {
      return 'No response received';
    }

    return error.message;
  }
}

module.exports = ApiError;
