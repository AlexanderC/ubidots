const endpoint = require('../endpoint');
const { interpolate } = require('../../utils/string');

module.exports = {
  create: endpoint({
    path: 'organizations',
    method: 'POST',
    data: {
      name: null, // required
      logo_url: null,
      description: null,
      properties: {},
      favicon_url: null,
      logo_raw_url: null,
      logo_big_url: null,
      active: true,
    },
  }),
  generateToken: endpoint({
    path: '/auth/tokens/organizations/{id}',
    method: 'POST',
    useAPIKey: true,
    async populate({ id, name }) {
      this.url = interpolate(this.url, { id });
      this.data = { name };
    },
  }),
  list: endpoint({
    path: 'organizations',
  }),
  read: endpoint({
    path: 'organizations/{id}',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
  update: endpoint({
    path: 'organizations/{id}',
    method: 'PUT',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  patch: endpoint({
    path: 'organizations/{id}',
    method: 'PATCH',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  delete: endpoint({
    path: 'organizations/{id}',
    method: 'DELETE',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
  getUsers: endpoint({
    path: 'organizations/{id}/users?page={page}',
    async populate({ id, page = 1 }) {
      this.url = interpolate(this.url, { id, page });
    },
  }),
  getDevices: endpoint({
    path: 'datasources/?organization_id={id}&page={page}',
    async populate({ id, page = 1 }) {
      this.url = interpolate(this.url, { id, page });
    },
  }),
};
