require('dotenv').config()
module.exports = {
  development: {
    database: 'mindify_development',
    dialect: 'postgres'
  },
  test: {
    database: 'mindify_test',
    dialect: 'postgres'
  },
  production: {
    database: 'mindify_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
