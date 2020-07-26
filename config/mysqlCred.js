module.exports = {
    database: 'dog_adoption',
    user: 'root',
    password: 'password',
    host: "examdb.cab7koaw8w48.us-east-1.rds.amazonaws.com",

    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};