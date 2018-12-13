const endpoint = require('../endpoint');

module.exports = {
  'list-timezones': endpoint({
    path: 'utils/timezones',
  }),
  'utc-timestamp': endpoint({
    path: 'utils/utcnow',
  }),
};
