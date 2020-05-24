const pkgDir = require('pkg-dir');
const prettyMs = require('pretty-ms');
const { toMb } = require('./convert');

const rootDir = pkgDir.sync();
const path = require('path');
// istanbul ignore next
const { name = '', version = '' } = require(path.join(rootDir, 'package.json'));
// istanbul ignore next
const env = process.env.NODE_ENV || 'unknown';
const started = new Date().toISOString();

const stats = {
  get uptime() {
    const ms = process.uptime() * 1000;
    return prettyMs(ms);
  },
  get memory() {
    const mem = process.memoryUsage();
    return {
      rss: toMb(mem.rss),
      external: toMb(mem.external),
      heapUsed: toMb(mem.heapUsed),
      heapTotal: toMb(mem.heapTotal),
    };
  },
  start: started,
  env,
  name,
  version,
  node: process.version,
};

module.exports = stats;
