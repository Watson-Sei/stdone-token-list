import fastify from 'fastify';
import fs from 'fs';

const server = fastify({
    logger: true
});

server.get('/local', async (request, reply) => {
    const jsonObject = JSON.parse(fs.readFileSync(`${__dirname}/token_list.local.json`, "utf8"));
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(jsonObject);
})

server.get('/stg', async (request, reply) => {
    const jsonObject = JSON.parse(fs.readFileSync(`${__dirname}/token_list.stg.json`, "utf8"));
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(jsonObject);
})

server.listen(3000, (err, address) => {
    if (err) throw err
    server.log.info(`server listening on ${address}`);
})