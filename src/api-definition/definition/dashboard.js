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
  patch: endpoint({
    path: 'dashboards/{id}',
    method: 'PATCH',
    data: {
      organziation: null,
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
      sendInvitation: true,
      invitation: {
        subject: null,
        message: null,
        expires: null,
        change_password: true,
        app: null,
      },
    },
    async populate(id, data) {
      this.url = interpolate(this.url, { id });

      this.data = data;
    },
  }),
};
