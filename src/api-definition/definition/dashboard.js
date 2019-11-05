const endpoint = require('../endpoint');
const { interpolate } = require('../../utils/string');

module.exports = {
  duplicate: endpoint({
    path: 'dashboards/{id}/_/duplicate',
    method: 'POST',
    data: {
      device: null, // required (device id)
      mode: null, // required (ex: "dynamic", "static")
    },
    async populate(id, data) {
      this.url = interpolate(this.url, { id });

      this.data = data;
    },
  }),
  sendInvite: endpoint({
    path: 'users/{id}',
    method: 'PATCH',
    data: {
      email: null,
      username: null,
      custom_username: null,
      sendInvitation: null,
      invitation: {
        subject: null,
        message: null,
        expires: null,
        change_password: null,
        app: null,
      },
    },
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
};
