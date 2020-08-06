//Knex is used for data migration

const credentials = require("./config/mysqlCred");
const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host: credentials.host,
      database: credentials.database,
      user:     credentials.user,
      password: credentials.password
    },
    ...knexSnakeCaseMappers()
  }
};