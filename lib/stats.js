const prettyMs = require('pretty-ms');
const pkgDir = require('pkg-dir');
const rootDir = pkgDir.sync();
const path = require('path');
const { name = '', version = '' } = require(path.join(rootDir, 'package.json'));
const env = process.env.NODE_ENV || 'unknown';
const started = new Date().toISOString();

function toMb(bytes) {
  if (!bytes) {
    return `-`;
  }
  return `${Math.round(bytes / 1024 / 1024 / 100) * 100}Mb`;
}

const stats = {
  get uptime() {
    const ms = process.uptime();
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
