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
});
