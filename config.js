'use strict';

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://localhost/my-database';

module.exports = { DATABASE_URL };