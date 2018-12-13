const { expect } = require('chai');

suite('Ubidots.api("utils")', async function() {
  test('list-timezones', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('utils')
      .endpoint('list-timezones')
      .call();

    expect(response.isError).to.be.false;
    expect(response.data).to.be.an('array');
    expect(response.data.length).to.be.gte(1);
  });

  test('utc-timestamp', async function() {
    const { ubitods } = global;

    const response = await ubitods
      .api('utils')
      .endpoint('utc-timestamp')
      .call();

    expect(response.isError).to.be.false;
    expect(response.data).to.be.gte(0);
  });
});
