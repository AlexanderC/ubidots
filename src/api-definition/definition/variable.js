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
  'history-list': endpoint({
    path: 'data/stats/resample',
    method: 'POST',
    data: {
      end: null, // required
      start: null, // required
      period: null, // required
      aggregation: null, // required
      join_dataframes: null, // required
      variables: [] // required
    },
    async populate(data) {
      this.data = data;
    },
  }),
};
