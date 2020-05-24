const fastify = require('fastify');
const fastifyPlugin = require('../index');

describe('metrics plugin', () => {
  describe('all disabled', () => {
    const app = fastify();

    beforeAll(async () => {
      await app.register(fastifyPlugin);
      await app.ready();
    });

    afterAll(async () => {
      await app.close();
    });
    test('info endpoint unavailable', async () => {
      await expect(
        app.inject({
          headers: {
            'content-type': 'text/plain',
          },
          method: 'GET',
          url: '/__info__',
        })
      ).resolves.toMatchObject({
        statusCode: 404,
      });
    });

    test('alive endpoint unavailable', async () => {
      await expect(
        app.inject({
          headers: {
            'content-type': 'text/plain',
          },
          method: 'GET',
          url: '/__alive__',
        })
      ).resolves.toMatchObject({
        statusCode: 404,
      });
    });
  });

  describe('info disabled', () => {
    const app = fastify();

    beforeAll(async () => {
      await app.register(fastifyPlugin, {
        alive: '/__alive__',
      });
      await app.ready();
    });

    afterAll(async () => {
      await app.close();
    });
    test('info endpoint unavailable', async () => {
      await expect(
        app.inject({
          headers: {
            'content-type': 'text/plain',
          },
          method: 'GET',
          url: '/__info__',
        })
      ).resolves.toMatchObject({
        statusCode: 404,
      });
    });
  });

  describe('alive disabled', () => {
    const app = fastify();

    beforeAll(async () => {
      await app.register(fastifyPlugin, {
        info: '/__info__',
      });
      await app.ready();
    });

    afterAll(async () => {
      await app.close();
    });
    test('info endpoint unavailable', async () => {
      await expect(
        app.inject({
          headers: {
            'content-type': 'text/plain',
          },
          method: 'GET',
          url: '/__alive__',
        })
      ).resolves.toMatchObject({
        statusCode: 404,
      });
    });
  });
  describe('info and healthcheck', () => {
    const app = fastify();

    beforeAll(async () => {
      await app.register(fastifyPlugin, {
        alive: '/__alive__',
        info: '/__info__',
      });
      await app.ready();
    });

    afterAll(async () => {
      await app.close();
    });

    test('healthcheck endpoint available', async () => {
      await expect(
        app.inject({
          headers: {
            'content-type': 'text/plain',
          },
          method: 'GET',
          url: '/__alive__',
        })
      ).resolves.toMatchObject({
        body: '',
        statusCode: 200,
      });
    });

    test('info endpoint available', async () => {
      const result = await app.inject({
        headers: {
          'content-type': 'application/json',
        },
        method: 'GET',
        url: '/__info__',
      });
      expect(result.statusCode).toBe(200);
      expect(JSON.parse(result.body)).toMatchObject({
        name: 'fastify-status',
        version: expect.stringMatching(/^\d+\.\d+\.\d+(-rc.\d+|)$/),
        node: expect.stringMatching(/^v\d+\.\d+\.\d+(-rc.\d+|)$/),
        env: expect.any(String),
        start: expect.any(String),
        uptime: expect.any(String),
        memory: {
          rss: expect.stringMatching(/^\d+\.\d{2}Mb$/),
          external: expect.stringMatching(/^\d+\.\d{2}Mb$/),
          heapTotal: expect.stringMatching(/^\d+\.\d{2}Mb$/),
          heapUsed: expect.stringMatching(/^\d+\.\d{2}Mb$/),
        },
      });
    });
  });
});
