const fp = require('fastify-plugin');
const status = require('@m03geek/server-status');
const {now} = require('fastify/lib/logger');

const DEFAULT_ENDPOINT = '/status';

let fastifyVersion;

try {
  const {version} = require('fastify/package.json');
  fastifyVersion = version;
} catch (ex) {
  // ignore
}

const statusPlugin = (
  fastify,
  {endpoint = DEFAULT_ENDPOINT, hide = true, method = 'GET'} = {},
  next
) => {
  fastify.route({
    url: endpoint,
    method: method.toUpperCase(),
    schema: {
      description: 'Method returns server status',
      hide,
      response: {
        '200': {
          description: 'Server status',
          type: 'object',
          properties: {
            name: {type: 'string', description: 'Server name'},
            version: {type: 'string', description: 'Server version'},
            now: {type: 'string', format: 'date', description: 'Current date'},
            uptime: {type: 'string', description: 'Server uptime'},
            uptimeSec: {type: 'number'},
            title: {type: 'string', description: 'Process title'},
            responseTime: {type: 'number'},
            runtime: {
              type: 'object',
              properties: {
                node: {type: 'string', description: 'Node.js version'},
                env: {type: 'string', description: 'Environment'},
              },
            },
          },
        },
        '5xx': {
          description: 'Unknown error',
          type: 'string',
        },
      },
    },
    handler: (request, reply) => {
      const data = Object.assign({fastify: fastifyVersion}, status());
      if (reply.res._startTime) {
        data.responseTime = now() - reply.res._startTime;
      }
      reply.send(data);
    },
  });
  next();
};

module.exports = fp(statusPlugin, {
  fastify: '>=1.0.0',
  name: 'fastify-status',
});
