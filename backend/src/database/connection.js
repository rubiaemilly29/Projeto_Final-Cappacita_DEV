const knex = require('knex')
const DatabaseCofig = require('./knexFile');

const databaseConnection = knex(DatabaseCofig)

module.exports = {databaseConnection}