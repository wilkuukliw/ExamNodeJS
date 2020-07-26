//Knex is used for data migration

const credentials = require("./config/mysqlCred");
const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user:     credentials.user,
      password: credentials.password
    },
    ...knexSnakeCaseMappers()
  }
};