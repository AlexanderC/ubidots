# (WIP) Unofficial Ubidots NodeJS API Client

Node.js API Client for [Ubidots](https://ubidots.com)

## Prerequisites

- [ ] `Node.JS` >=v8

## Installation

```bash
npm install ubidots
```

## Testing

```bash
UBIDOTS_API_KEY='xxxx' UBIDOTS_TOKEN='xxxx' npm test
```

## Usage

Initializing Library:

```javascript
const Ubidots = require('ubidots');
const client = Ubidots.create(Ubidots.ApiBase.Educational);

// Authorize API with an API Key
await client.authorize(API_KEY);
// or alternatively using a pre-generated API Token
client.token = API_TOKEN;
```

> For usage examples see `test/` folder

## Debugging

For debugging purpose the [debug](https://www.npmjs.com/package/debug) npm module is used.

Example of using the debug feature:

```bash
DEBUG='ubidots:*' npm test
```

## Roadmap

- [ ] Complete API definition
