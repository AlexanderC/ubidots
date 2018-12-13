const endpoint = require('../endpoint');
const { interpolate } = require('../../utils/string');

module.exports = {
  create: endpoint({
    path: 'users',
    method: 'POST',
    data: {
      email: null, // required
      username: null, // required
      password: null, // required
      organizations: [], // [{"id":ORG_ID,"roles":["ROLE"]}]
      first_name: null,
      last_name: null,
      groups: [],
    },
  }),
  list: endpoint({
    path: 'users',
  }),
  read: endpoint({
    path: 'users/{id}',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
  update: endpoint({
    path: 'users/{id}',
    method: 'PUT',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  patch: endpoint({
    path: 'users/{id}',
    method: 'PATCH',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  delete: endpoint({
    path: 'users/{id}',
    method: 'DELETE',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
};
