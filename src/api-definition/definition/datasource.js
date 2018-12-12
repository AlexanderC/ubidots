const endpoint = require('../endpoint');
const { interpolate } = require('../../utils/string');

module.exports = {
  create: endpoint({
    path: 'datasources',
    method: 'POST',
    data: {
      name: null, // required
      organization: null,
      enabled: true,
      label: null,
      parent: {},
      context: {},
      tags: [],
      description: null,
    },
  }),
  list: endpoint({
    path: 'datasources',
  }),
  read: endpoint({
    path: 'datasources/{id}',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
  update: endpoint({
    path: 'datasources/{id}',
    method: 'PUT',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  patch: endpoint({
    path: 'datasources/{id}',
    method: 'PATCH',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  delete: endpoint({
    path: 'datasources/{id}',
    method: 'DELETE',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
  'create-variable': endpoint({
    path: 'datasources/{id}/variables',
    method: 'POST',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  'list-variables': endpoint({
    path: 'datasources/{id}/variables',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
};
