const { expect } = require('chai');

suite('Ubidots', async function() {
  test('should be able to authorize', async function() {
    const { ubitods, ubitodsApiKey } = global;

    await ubitods.authorize(ubitodsApiKey);

    expect(ubitods.token).to.be.a('string');
  });
});
