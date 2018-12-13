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
  'read-variable': endpoint({
    path: 'devices/{label}/{variable}',
    async populate(label, variable) {
      this.url = interpolate(this.url, { label, variable });
    },
  }),
  'update-variable': endpoint({
    path: 'devices/{label}/{variable}',
    method: 'PUT',
    async populate(label, variable, data) {
      this.url = interpolate(this.url, { label, variable });
      this.data = data;
    },
  }),
  'patch-variable': endpoint({
    path: 'devices/{label}/{variable}',
    method: 'PATCH',
    async populate(label, variable, data) {
      this.url = interpolate(this.url, { label, variable });
      this.data = data;
    },
  }),
  'delete-variable': endpoint({
    path: 'devices/{label}/{variable}',
    method: 'DELETE',
    async populate(label, variable) {
      this.url = interpolate(this.url, { label, variable });
    },
  }),
  'read-variable-values-last': endpoint({
    path: 'devices/{label}/{variable}/lv',
    async populate(label, variable, params = {}) {
      this.url = interpolate(this.url, { label, variable });
      this.params = params;
    },
  }),
  'read-variable-values': endpoint({
    path: 'devices/{label}/{variable}/values',
    async populate(label, variable, params = {}) {
      this.url = interpolate(this.url, { label, variable });
      this.params = params;
    },
  }),
  'create-variable-values': endpoint({
    path: 'devices/{label}/{variable}/values',
    method: 'POST',
    async populate(label, variable, data) {
      this.url = interpolate(this.url, { label, variable });
      this.data = data;
    },
  }),
};
