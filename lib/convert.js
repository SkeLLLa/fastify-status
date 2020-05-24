/**
 * Convert bytes to Mb
 * @param {number} bytes bytes
 * @return {string} amouunt in Mb
 */
exports.toMb = function toMb(bytes = 0) {
  return `${Math.round(bytes / 1024 / 1024).toFixed(2)}Mb`;
};
