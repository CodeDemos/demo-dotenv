'use strict';

require('dotenv').config(); // By default, loads `.env`

console.log( process.env.SECRET ); // log some envvar



// const { DATABASE_URL } = require('./config');
// const knex = require('knex')( DATABASE_URL );