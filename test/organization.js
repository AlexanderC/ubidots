const { expect } = require('chai');

suite('Ubidots.api("organization")', async function() {
  const ORG = {
    id: null,
    name: `Sample Organization #${Math.ceil(Date.now())}`,
  };

  test('create', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('organization')
      .endpoint('create')
      .call({ name: ORG.name });

    expect(response.isError).to.be.false;
    expect(response.data.name).to.be.equal(ORG.name);

    ORG.id = response.data.id;
  });

  test('generateToken', async function() {
    const { ubitods, ubitodsApiKey } = global;
    const tokenName = `Test Token #${Date.now()}`;

    const endpoint = await ubitods
      .api('organization')
      .endpoint('generateToken');

    endpoint.key = ubitodsApiKey;
    const response = await endpoint.call({ id: ORG.id, name: tokenName });

    expect(response.isError).to.be.false;
    expect(response.data.name).to.be.equal(tokenName);
    expect(response.data.token).to.be.a('string');
  });

  test('list', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('organization')
      .endpoint('list')
      .call();

    expect(response.isError).to.be.false;
    expect(response.data.count).to.be.gte(1);
    expect(response.data.results.filter(r => r.id === ORG.id).length).to.be.equal(1);
  });

  test('read', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('organization')
      .endpoint('read')
      .call(ORG.id);

    expect(response.isError).to.be.false;
    expect(response.data.id).to.be.equal(ORG.id);
    expect(response.data.name).to.be.equal(ORG.name);
  });

  test('update', async function() {
    const { ubitods } = global;
    const description = `Random Description #${Math.random()}`;

    const response = await ubitods
      .api('organization')
      .endpoint('update')
      .call(ORG.id, { description, name: ORG.name });

    expect(response.isError).to.be.false;
    expect(response.data.description).to.be.equal(description);
    expect(response.data.name).to.be.equal(ORG.name);
  });

  test('patch', async function() {
    const { ubitods } = global;
    const description = `Random Description #${Math.random()}`;

    const response = await ubitods
      .api('organization')
      .endpoint('patch')
      .call(ORG.id, { description });

    expect(response.isError).to.be.false;
    expect(response.data.description).to.be.equal(description);
    expect(response.data.name).to.be.equal(ORG.name);
  });

  test('delete', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('organization')
      .endpoint('delete')
      .call(ORG.id);

    expect(response.isError).to.be.false;
  });
});
