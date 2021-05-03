'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
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
            }
        }, {
            timestamp: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        queryInterface.dropTable('users');
    }
};
