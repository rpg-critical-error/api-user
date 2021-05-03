require('dotenv').config({ load: '../../' });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_USERNAME,
    host: process.env.DB_USERNAME,
    dialect: process.env.DB_USERNAME | "postgres",
    define: {
      timestamps: true,
      underscored: true
    },
    dialectOptions: {
      useUTC: false,
      dateStrings: true
    },
    timezone: 'America/Sao_Paulo'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_USERNAME + "_test",
    host: process.env.DB_USERNAME,
    dialect: process.env.DB_USERNAME | "postgres",
    define: {
      timestamps: true,
      underscored: true
    },
    dialectOptions: {
      useUTC: false,
      dateStrings: true
    },
    timezone: 'America/Sao_Paulo'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_USERNAME,
    host: process.env.DB_USERNAME,
    dialect: process.env.DB_USERNAME | "postgres",
    define: {
      timestamps: true,
      underscored: true
    },
    dialectOptions: {
      useUTC: false,
      dateStrings: true
    },
    timezone: 'America/Sao_Paulo'
  }
}
