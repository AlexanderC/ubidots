const endpoint = require('../endpoint');
const { interpolate } = require('../../utils/string');

module.exports = {
  create: endpoint({
    path: 'variables',
    method: 'POST',
    data: {
      name: null, // required
      icon: null,
      unit: null,
      label: null,
      datasource: {},
      description: null,
      properties: {},
      tags: [],
      type: 0,
      derived_expr: null,
    },
  }),
  list: endpoint({
    path: 'variables',
  }),
  read: endpoint({
    path: 'variables/{id}',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
  update: endpoint({
    path: 'variables/{id}',
    method: 'PUT',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  patch: endpoint({
    path: 'variables/{id}',
    method: 'PATCH',
    async populate(id, data) {
      this.url = interpolate(this.url, { id });
      this.data = data;
    },
  }),
  delete: endpoint({
    path: 'variables/{id}',
    method: 'DELETE',
    async populate(id) {
      this.url = interpolate(this.url, { id });
    },
  }),
};
