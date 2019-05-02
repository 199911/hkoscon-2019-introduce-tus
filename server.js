const express = require('express')
const app = express()

const tusRouter = require('./tusRouter.js');

app.use('/', express.static('demo'));
app.use('/uploads', tusRouter);

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))