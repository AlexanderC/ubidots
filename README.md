# Unofficial Ubidots NodeJS API Client

Node.js API Client for [Ubidots](https://ubidots.com)

## Prerequisites

- [ ] `Node.JS` >=v8

## Installation

```bash
npm install ubidots-node
```

## Usage

Initializing Library:

```javascript
const Ubidots = require('ubidots-node');
const client = Ubidots.create(Ubidots.ApiBase.Educational);

// Authorize API with an API Key
await client.authorize(API_KEY);
// or alternatively using a pre-generated API Token
client.token = API_TOKEN;

// Obtain UTC timestamp
const { data: now } = await ubitods
  .api('utils') // API namespace
  .endpoint('utc-timestamp') // API endpoint
  .call(); // Pass parameters/options/data

console.log('UTC Timestamp', now);

// Generate API token using API Key
const { data: token } = await ubitods
  .api('auth') // API namespace
  .endpoint('obtainToken') // API endpoint
  .call(apiKey = 'your-api-key'); // Pass parameters/options/data

console.log('API Token', token);
```

Available APIs:

- `auth` - [Authentication](https://ubidots.com/docs/sw/#section/Authentication)
- `organization` - Missing docs
- `user` - Missing docs
- `datasource` - [Datasources](https://ubidots.com/docs/sw/#tag/Datasources)
- `dashboard` - Missing docs
- `device` - [Devices](https://ubidots.com/docs/sw/#tag/Devices)
- `variable` - [Variables](https://ubidots.com/docs/sw/#tag/Variables)
- `utils` - [Utils](https://ubidots.com/docs/sw/#tag/Utils)

Official API Documentation: [https://ubidots.com/docs/sw/](https://ubidots.com/docs/sw/)

> For usage examples see `test/` folder

## Testing

```bash
UBIDOTS_API_KEY='xxxx' UBIDOTS_TOKEN='xxxx' npm test
```

## Debugging

For debugging purpose the [debug](https://www.npmjs.com/package/debug) npm module is used.

Example of using the debug feature:

```bash
DEBUG='ubidots-node:*' npm test
```

## Roadmap

- [ ] Complete API definition
- [ ] Add missing tests
- [ ] Add payload validation
- [ ] Find missing docs *(Ubidots support?)*