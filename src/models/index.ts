/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Sequelize } from 'sequelize';
import User from './user';
import { config } from '../db/config';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

function buildModels(seq: Sequelize) {
    return {
        User: User(seq),
    };
}

export const models = buildModels(sequelize);
export type Models = ReturnType<typeof buildModels>;
