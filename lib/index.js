const fp = require('fastify-plugin');
const defaults = require('./defaults');
const stats = require('./stats');

module.exports = fp(
  async function statusPlugin(
    fastify,
    { infoUrl = defaults.INFO_URL, aliveUrl = defaults.ALIVE_URL } = {}
  ) {
    fastify.get(
      infoUrl,
      {
        schema: {
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
    fastify.get(
      aliveUrl,
      {
        schema: {},
      },
      (_, res) => {
        res.status(200).send();
      }
    );
  },
  {
    fastify: '>=1.0.0',
    name: 'fastify-status',
  }
);
