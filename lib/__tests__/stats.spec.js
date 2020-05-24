const pj = require('../../package.json');
const stats = require('../stats');

describe('stats', () => {
  test('returns stats object', () => {
    expect(stats).toMatchObject({
      name: pj.name,
      version: pj.version,
      node: process.version,
      env: process.env.NODE_ENV,
    });
  });
});
