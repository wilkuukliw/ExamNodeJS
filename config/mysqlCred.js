module.exports = {
    database: 'examdb',
    user: 'admin',
    password: 'password',
    sessionSecret: 'some session secret',
    host: "examdb.cbheq4kzjn45.us-east-1.rds.amazonaws.com",

    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }

};