/**
 * Here we create an Express app instance that can
 * be required in various places.
 */
var config = require('./config.js')[process.env.NODE_ENV];
var express = require('express');;
var cors = require('cors');
var knex = require('knex')(config.database);
var bookshelf = require('bookshelf')(knex);;
var app = module.exports = express();

app.use(cors());
app.set('bookshelf', bookshelf);
