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
  endpoint: '/status',
  method: 'GET',
  hide: true, // for fastify-oas and fastify-swagger plugins
});
```

<sub>[Back to top](#toc)</sub>

## Format

```js
{
  name: 'fastify-status', // your server name from package.json
  version: '1.0.0', // your server version from package.json
  now: 2018-08-15T12:18:14.284Z,
  uptime: '0d 00:00:01',
  uptimeSec: 0.817,
  title: 'node',
  fastify: '1.9.0',
  responseTime: 0.0001
  runtime: { node: 'v10.8.0' }
}
```

<sub>[Back to top](#toc)</sub>
