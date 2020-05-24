# fastify-status

<div align="center">
  <img src="https://github.com/SkeLLLa/fastify-status/raw/master/logo.png" alt="fastify-status logo"/>
</div>

[![NPM Version](https://img.shields.io/npm/v/fastify-status.svg)](https://www.npmjs.com/package/fastify-status)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-status.svg)](https://www.npmjs.com/package/fastify-status)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-status/badge.svg)](https://www.npmjs.com/package/fastify-status)
[![Build Status](https://github.com/SkeLLLa/fastify-status/workflows/build/badge.svg)](https://github.com/SkeLLLa/fastify-metrics/actions)
[![License](https://img.shields.io/npm/l/fastify-status.svg)](https://gitlab.com/m03geek/fastify-status/blob/master/LICENSE)
[![Codecov](https://img.shields.io/codecov/c/gh/SkeLLLa/fastify-status.svg)](https://codecov.io/gh/SkeLLLa/fastify-status)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/SkeLLLa/fastify-status.svg)](https://lgtm.com/projects/g/SkeLLLa/fastify-status/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/SkeLLLa/fastify-status.svg)](https://lgtm.com/projects/g/SkeLLLa/fastify-status/)

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

## Changelog

See [changelog](CHANGELOG.md).

<sub>[Back to top](#toc)</sub>

## See also

- [under-pressure](https://github.com/fastify/under-pressure) - more advanced healthcheck.

## License

Licensed under [MIT](./LICENSE).

<sub>[Back to top](#toc)</sub>
