const stats = require('../lib/stats');
const pj = require('../package.json');

describe('stast', () => {
  test('returns stats object', () => {
    console.log(stats);
    expect(stats).toMatchObject({
      name: pj.name,
      version: pj.version,
      node: process.version,
      env: process.env.NODE_ENV,
    });
  });
});
