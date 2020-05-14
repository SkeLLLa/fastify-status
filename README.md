# fastify-status

[![NPM Version](https://img.shields.io/npm/v/fastify-status.svg)](https://www.npmjs.com/package/fastify-status)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-status.svg)](https://www.npmjs.com/package/fastify-status)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-status/badge.svg)](https://www.npmjs.com/package/fastify-status)
[![Build Status](https://gitlab.com/m03geek/fastify-status/badges/master/pipeline.svg)](https://gitlab.com/m03geek/fastify-status/commits/master)
[![License](https://img.shields.io/npm/l/fastify-status.svg)](https://gitlab.com/m03geek/fastify-status/blob/master/LICENSE)

Returns common info about fastify server. Could be used for healthchecks and status monitoring.

## ToC

- [fastify-status](#fastify-status)
  - [ToC](#toc)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Format](#format)

## Installation

```sh
npm i fastify-status --save
```

<sub>[Back to top](#toc)</sub>

## Usage

Example with default plugin options.

```js
const fastify = require('fastify');
const statusPlugin = require('fastify-status');

const app = fastify();
app.register(statusPlugin, {
  info: '/__info__',
  alive: '/__alive__',
});
```

Use `alive` for healthchecks and `info` to get information and some stats of your server.

If `info` or `alive` is not present in config, then apropriate route will not be added.

<sub>[Back to top](#toc)</sub>

## Format

```js
{
  uptime: '0d 0h 0m 10s',
  memory: {
    rss: '50Mb',
    external: '40Mb',
    heapTotal: '30Mb',
    heapUsed: '20Mb',
  },
  start: '2020-05-10T07:41:20.389Z',
  env: 'test',
  name: 'my-server',
  version: '1.0.0',
  node: 'v14.0.0'
}
```

<sub>[Back to top](#toc)</sub>
