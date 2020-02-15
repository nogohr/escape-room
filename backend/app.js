const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const routes = require('./routes/routes');
const app = express();

const config = require('./config.json');
const port = config.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes.routeHandler);

app.listen(port);

debug(`Started Node server on port: ${port}`);