const express = require('express')
const app = express()
const { join } = require('path')
const tusRouter = require('./tusRouter.js');

app.use('/', express.static(__dirname + '/static'));
app.use('/uploads', tusRouter);
app.use('/files', express.static(join(__dirname , '../files')));

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))
