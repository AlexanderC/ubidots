const { expect } = require('chai');

suite('Ubidots.api("user")', async function() {
  const USER = {
    id: null,
    email: `${Math.ceil(Date.now())}@example.com`,
    username: `user_${Math.ceil(Date.now())}`,
    password: `password_${Math.ceil(Date.now())}`,
  };

  test('create', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('user')
      .endpoint('create')
      .call({
        email: USER.email,
        username: USER.username,
        password: USER.password,
      });

    expect(response.isError).to.be.false;
    expect(response.data.email).to.be.equal(USER.email);
    expect(response.data.username).to.be.equal(USER.username);

    USER.id = response.data.id;
  });

  test('list', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('user')
      .endpoint('list')
      .call();

    expect(response.isError).to.be.false;
    expect(response.data.count).to.be.gte(1);
    expect(response.data.results.filter(r => r.id === USER.id).length).to.be.equal(1);
  });

  test('read', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('user')
      .endpoint('read')
      .call(USER.id);

    expect(response.isError).to.be.false;
    expect(response.data.id).to.be.equal(USER.id);
    expect(response.data.email).to.be.equal(USER.email);
    expect(response.data.username).to.be.equal(USER.username);
  });

  test('update', async function() {
    const { ubitods } = global;
    const first_name = `first_name_${Math.random()}`;

    const response = await ubitods
      .api('user')
      .endpoint('update')
      .call(USER.id, { first_name, username: USER.username, email: USER.email });

    expect(response.isError).to.be.false;
    expect(response.data.first_name).to.be.equal(first_name);
    expect(response.data.username).to.be.equal(USER.username);
    expect(response.data.email).to.be.equal(USER.email);
  });

  test('patch', async function() {
    const { ubitods } = global;
    const first_name = `first_name_${Math.random()}`;

    const response = await ubitods
      .api('user')
      .endpoint('patch')
      .call(USER.id, { first_name });

    expect(response.isError).to.be.false;
    expect(response.data.first_name).to.be.equal(first_name);
    expect(response.data.username).to.be.equal(USER.username);
    expect(response.data.email).to.be.equal(USER.email);
  });

  test('delete', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('user')
      .endpoint('delete')
      .call(USER.id);

    expect(response.isError).to.be.false;
  });
});
