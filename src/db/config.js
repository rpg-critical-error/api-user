/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        define: {
            timestamps: true,
            underscored: true,
        },
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: `${process.env.DB_NAME}_test`,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        define: {
            timestamps: true,
            underscored: true,
        },
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        define: {
            timestamps: true,
            underscored: true,
        },
    },
};
