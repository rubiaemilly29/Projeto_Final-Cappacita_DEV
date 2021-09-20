const knex = require('knex')
const DatabaseCofig = require('./knexFile');

const databaseConnection = knex(databaseConnection)

module.exports = {databaseConnection}