const { expect } = require('chai');

suite('Ubidots.api("auth")', async function() {
  test('obtainToken', async function() {
    const { ubitods, ubitodsApiKey } = global;

    const response = await ubitods
      .api('auth')
      .endpoint('obtainToken')
      .call(ubitodsApiKey);
    
    expect(response.isError).to.be.false;
    expect(response.data).to.be.a('string');
  });
});
