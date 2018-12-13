const { expect } = require('chai');

/**
 * @todo uncomment after creation allowed by the system (now fails w/ 403 error)
 */
suite('Ubidots.api("variable")', async function() {
  const VAR = {
    id: null,
    name: `sample_var_#${Math.ceil(Date.now())}`,
  };

  // test('create', async function() {
  //   const { ubitods } = global;

  //   const response = await ubitods
  //     .api('variable')
  //     .endpoint('create')
  //     .call({ name: VAR.name });

  //   expect(response.isError).to.be.false;
  //   expect(response.data.name).to.be.equal(VAR.name);

  //   VAR.id = response.data.id;
  // });

  test('list', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('variable')
      .endpoint('list')
      .call();

    expect(response.isError).to.be.false;
    // expect(response.data.count).to.be.gte(1);
    // expect(response.data.results.filter(r => r.id === VAR.id).length).to.be.equal(1);
  });

  // test('read', async function() {
  //   const { ubitods } = global;

  //   const response = await ubitods
  //     .api('variable')
  //     .endpoint('read')
  //     .call(VAR.id);

  //   expect(response.isError).to.be.false;
  //   expect(response.data.id).to.be.equal(VAR.id);
  //   expect(response.data.name).to.be.equal(VAR.name);
  // });

  // test('update', async function() {
  //   const { ubitods } = global;
  //   const description = `Random Description #${Math.random()}`;

  //   const response = await ubitods
  //     .api('variable')
  //     .endpoint('update')
  //     .call(VAR.id, { description, name: VAR.name });

  //   expect(response.isError).to.be.false;
  //   expect(response.data.description).to.be.equal(description);
  //   expect(response.data.name).to.be.equal(VAR.name);
  // });

  // test('patch', async function() {
  //   const { ubitods } = global;
  //   const description = `Random Description #${Math.random()}`;

  //   const response = await ubitods
  //     .api('variable')
  //     .endpoint('patch')
  //     .call(VAR.id, { description });

  //   expect(response.isError).to.be.false;
  //   expect(response.data.description).to.be.equal(description);
  //   expect(response.data.name).to.be.equal(VAR.name);
  // });

  // test('delete', async function() {
  //   const { ubitods } = global;

  //   const response = await ubitods
  //     .api('variable')
  //     .endpoint('delete')
  //     .call(VAR.id);

  //   expect(response.isError).to.be.false;
  // });
});
