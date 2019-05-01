const express = require('express')
const tus = require('tus-node-server');
const server = new tus.Server();
server.datastore = new tus.FileStore({
    path: '/files'
});
const tusRouter = express();
tusRouter.all('*', server.handle.bind(server));

module.exports = tusRouter;