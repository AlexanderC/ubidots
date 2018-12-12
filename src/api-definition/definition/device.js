const endpoint = require('../endpoint');
const { interpolate } = require('../../utils/string');

module.exports = {
  create: endpoint({
    path: 'devices/{label}',
    method: 'POST',
    async populate(data) {
      this.url = interpolate(this.url, data);
    },
  }),
  read: endpoint({
    path: 'devices/{label}',
    async populate(label) {
      this.url = interpolate(this.url, { label });
    },
  }),
  // 'create-variable': endpoint({
  //   path: 'devices/{label}/{variable}',
  //   method: 'POST',
  //   data: {
  //     name: null, // required
  //     icon: null,
  //     unit: null,
  //     label: null,
  //     datasource: {},
  //     description: null,
  //     properties: {},
  //     tags: [],
  //     type: null,
  //     derived_expr: null,
  //   },
  //   async populate(label, variable, data) {
  //     this.url = interpolate(this.url, { label, variable });
  //     this.data = data;
  //   },
  // }),
  // 'update-variable': endpoint({
  //   path: 'devices/{label}/{variable}',
  //   method: 'POST',
  //   async populate(label, variable, data) {
  //     this.url = interpolate(this.url, { label, variable });
  //     this.data = data;
  //   },
  // }),
  // 'patch-variable': endpoint({
  //   path: 'devices/{label}/{variable}',
  //   method: 'PATCH',
  //   async populate(label, variable, data) {
  //     this.url = interpolate(this.url, { label, variable });
  //     this.data = data;
  //   },
  // }),
  // 'read-variable': endpoint({
  //   path: 'devices/{label}/{variable}',
  //   async populate(label, variable) {
  //     this.url = interpolate(this.url, { label, variable });
  //   },
  // }),
  // 'delete-variable': endpoint({
  //   path: 'devices/{label}/{variable}',
  //   method: 'DELETE',
  //   async populate(label, variable) {
  //     this.url = interpolate(this.url, { label, variable });
  //   },
  // }),
  // list: endpoint({
  //   path: 'devices',
  // }),
  // read: endpoint({
  //   path: 'devices/{label}',
  //   async populate(label) {
  //     this.url = interpolate(this.url, { label });
  //   },
  // }),
  // update: endpoint({
  //   path: 'devices/{label}',
  //   method: 'PUT',
  //   async populate(label, data) {
  //     this.url = interpolate(this.url, { label });
  //     this.data = data;
  //   },
  // }),
  // patch: endpoint({
  //   path: 'devices/{label}',
  //   method: 'PATCH',
  //   async populate(label, data) {
  //     this.url = interpolate(this.url, { label });
  //     this.data = data;
  //   },
  // }),
  // delete: endpoint({
  //   path: 'devices/{label}',
  //   method: 'DELETE',
  //   async populate(label) {
  //     this.url = interpolate(this.url, { label });
  //   },
  // }),
  // 'create-variable': endpoint({
  //   path: 'devices/{label}/variables',
  //   method: 'POST',
  //   async populate(label, data) {
  //     this.url = interpolate(this.url, { label });
  //     this.data = data;
  //   },
  // }),
  // 'list-variables': endpoint({
  //   path: 'devices/{label}/variables',
  //   async populate(label) {
  //     this.url = interpolate(this.url, { label });
  //   },
  // }),
};
