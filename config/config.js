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
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
