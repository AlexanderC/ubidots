const Ubidots = require('../src/ubidots');

before(() => {
  global.ubitods = Ubidots.create(Ubidots.ApiBase.Educational);

  if (process.env.hasOwnProperty('UBIDOTS_TOKEN')) {
    global.ubitods.token = process.env.UBIDOTS_TOKEN;
  } else {
    console.warn('You might set UBIDOTS_TOKEN environment variable');
  }

  if (process.env.hasOwnProperty('UBIDOTS_API_KEY')) {
    global.ubitodsApiKey = process.env.UBIDOTS_API_KEY;
  } else {
    console.warn('You might set UBIDOTS_API_KEY environment variable');
  }
});
