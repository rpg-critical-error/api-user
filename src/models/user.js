'use strict';

const { Sequelize } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        nickname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });

    user.associate = models => { };

    return user
};
