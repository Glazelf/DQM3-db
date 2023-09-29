const { join } = require('path');
const { promises: fs } = require('fs');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ];
  },
};