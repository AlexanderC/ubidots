const { expect } = require('chai');

suite('Ubidots.api("datasource")', async function() {
  const DS = {
    id: null,
    name: `Sample Datasource #${Math.ceil(Date.now())}`,
    var: `sample_var_${Math.ceil(Date.now())}`,
  };

  test('create', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('datasource')
      .endpoint('create')
      .call({ name: DS.name });

    expect(response.isError).to.be.false;
    expect(response.data.name).to.be.equal(DS.name);

    DS.id = response.data.id;
  });

  test('list', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('datasource')
      .endpoint('list')
      .call();

    expect(response.isError).to.be.false;
    expect(response.data.count).to.be.gte(1);
    expect(response.data.results.filter(r => r.id === DS.id).length).to.be.equal(1);
  });

  test('read', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('datasource')
      .endpoint('read')
      .call(DS.id);

    expect(response.isError).to.be.false;
    expect(response.data.id).to.be.equal(DS.id);
    expect(response.data.name).to.be.equal(DS.name);
  });

  test('update', async function() {
    const { ubitods } = global;
    const description = `Random Description #${Math.random()}`;

    const response = await ubitods
      .api('datasource')
      .endpoint('update')
      .call(DS.id, { description, name: DS.name });

    expect(response.isError).to.be.false;
    expect(response.data.description).to.be.equal(description);
    expect(response.data.name).to.be.equal(DS.name);
  });

  test('patch', async function() {
    const { ubitods } = global;
    const description = `Random Description #${Math.random()}`;

    const response = await ubitods
      .api('datasource')
      .endpoint('patch')
      .call(DS.id, { description });

    expect(response.isError).to.be.false;
    expect(response.data.description).to.be.equal(description);
    expect(response.data.name).to.be.equal(DS.name);
  });

  test('create-variable', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('datasource')
      .endpoint('create-variable')
      .call(DS.id, { name: DS.var });

    expect(response.isError).to.be.false;
    expect(response.data.name).to.be.equal(DS.var);
  });

  test('list-variables', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('datasource')
      .endpoint('list-variables')
      .call(DS.id);

    expect(response.isError).to.be.false;
    expect(response.data.count).to.be.gte(0);
    expect(response.data.results.filter(r => r.name === DS.var).length).to.be.equal(1);
  });

  test('delete', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('datasource')
      .endpoint('delete')
      .call(DS.id);

    expect(response.isError).to.be.false;
  });
});
