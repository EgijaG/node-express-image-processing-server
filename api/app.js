const express = require('express');
const path = require('path');

const app = express();
const pathToIndex = path.resolve(__dirname, '../client/index.html');
const router = require('./scr/router');
app.use('/*', (request, response) => {
  response.sendFile(pathToIndex);
});
app.use('/', router);
app.use(express.static(path.resolve(__dirname, 'uploads')));
module.exports = app;
