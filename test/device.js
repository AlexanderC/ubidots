const { expect } = require('chai');

suite('Ubidots.api("device")', async function() {
  const DEV = {
    label: `sample_device_${Math.ceil(Date.now())}`,
  };

  test('create', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('device')
      .endpoint('create')
      .call({ label: DEV.label });

    expect(response.isError).to.be.false;
  });

  test('read', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('device')
      .endpoint('read')
      .call(DEV.label);

    expect(response.isError).to.be.false;
    expect(response.data.label).to.be.equal(DEV.label);
  });

  // test('read', async function() {
  //   const { ubitods } = global;

  //   const response = await ubitods
  //     .api('device')
  //     .endpoint('read')
  //     .call(DEV.id);

  //   expect(response.isError).to.be.false;
  //   expect(response.data.id).to.be.equal(DEV.id);
  //   expect(response.data.name).to.be.equal(DEV.name);
  // });

  // test('update', async function() {
  //   const { ubitods } = global;
  //   const description = `Random Description #${Math.random()}`;

  //   const response = await ubitods
  //     .api('device')
  //     .endpoint('update')
  //     .call(DEV.id, { description, name: DEV.name });

  //   expect(response.isError).to.be.false;
  //   expect(response.data.description).to.be.equal(description);
  //   expect(response.data.name).to.be.equal(DEV.name);
  // });

  // test('patch', async function() {
  //   const { ubitods } = global;
  //   const description = `Random Description #${Math.random()}`;

  //   const response = await ubitods
  //     .api('device')
  //     .endpoint('patch')
  //     .call(DEV.id, { description });

  //   expect(response.isError).to.be.false;
  //   expect(response.data.description).to.be.equal(description);
  //   expect(response.data.name).to.be.equal(DEV.name);
  // });

  // test('create-variable', async function() {
  //   const { ubitods } = global;

  //   const response = await ubitods
  //     .api('device')
  //     .endpoint('create-variable')
  //     .call(DEV.id, { name: DEV.var });

  //   expect(response.isError).to.be.false;
  //   expect(response.data.name).to.be.equal(DEV.var);
  // });

  // test('list-variables', async function() {
  //   const { ubitods } = global;

  //   const response = await ubitods
  //     .api('device')
  //     .endpoint('list-variables')
  //     .call(DEV.id);

  //   expect(response.isError).to.be.false;
  //   expect(response.data.count).to.be.gte(0);
  //   expect(response.data.results.filter(r => r.name === DEV.var).length).to.be.equal(1);
  // });

  // test('delete', async function() {
  //   const { ubitods } = global;

  //   const response = await ubitods
  //     .api('device')
  //     .endpoint('delete')
  //     .call(DEV.id);

  //   expect(response.isError).to.be.false;
  // });
});
