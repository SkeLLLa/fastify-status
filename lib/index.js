const fp = require('fastify-plugin');
const stats = require('./stats');

module.exports = fp(
  // @ts-ignore
  async function statusPlugin(fastify, { info = null, alive = null } = {}) {
    if (info) {
      fastify.get(
        info,
        {
          schema: {
            // @ts-ignore
            hide: true,
            response: {
              200: {
                type: 'object',
                description: 'Server status',
                properties: {
                  name: { type: 'string', description: 'Server name' },
                  version: { type: 'string', description: 'Server version' },
                  uptime: { type: 'string', description: 'Server uptime' },
                  node: { type: 'string', description: 'Node.js version' },
                  start: {
                    type: 'string',
                    description: 'Server start date time',
                  },
                  env: { type: 'string', description: 'Node.js env' },
                  memory: {
                    type: 'object',
                    properties: {
                      rss: { type: 'string', description: 'RSS memory' },
                      external: {
                        type: 'string',
                        description: 'External memory',
                      },
                      heapTotal: {
                        type: 'string',
                        description: 'Total heap memory',
                      },
                      heapUsed: {
                        type: 'string',
                        description: 'Used heap memory',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        (_, res) => {
          return res.status(200).send(stats);
        }
      );
    }
    if (alive) {
      fastify.get(
        alive,
        {
          schema: {
            // @ts-ignore
            hide: true,
          },
        },
        (_, res) => {
          res.status(200).send();
        }
      );
    }
  },
  {
    fastify: '>=1.0.0',
    name: 'fastify-status',
  }
);
