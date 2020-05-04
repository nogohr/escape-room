const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const routes = require('./routes/routes');
const app = express();

const config = require('./config/config.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes.routeHandler);

const port = config.port || 3000;
app.listen(port);

debug(`Started Node server on port: ${port}`);
