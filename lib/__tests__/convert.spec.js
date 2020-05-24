const { toMb } = require('../convert');

describe('convert', () => {
  test('converts bytes to megabytes', () => {
    expect(toMb(1024 * 1024)).toBe('1.00Mb');
  });

  test('returns 0 megabytes with no args', () => {
    expect(toMb()).toBe('0.00Mb');
  });
});
