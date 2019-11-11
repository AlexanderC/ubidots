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
    path: 'variables?page_size={pageSize}&page={page}&search__icontains={searchTerm}',
    async populate({ pageSize = 100, page = 1, searchTerm = '' }) {
      this.url = interpolate(this.url, { pageSize, page, searchTerm });
    }
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
