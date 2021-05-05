import sequelize, { BuildOptions, DataTypes } from 'sequelize';
import { Model, Sequelize, DataType } from 'sequelize';

interface User extends Model {
    readonly id: string;
    name: string;
    nickname: string;
    email: string;
    password: string;
    created_at: Date;
    deleted_at: Date;
    updated_at: Date;
}

type UserStatic = typeof Model & {
    new (values?: Partial<User>, options?: BuildOptions): User;
};

export function build(sequelize: Sequelize) {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            confirmed: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
        }
    ) as UserStatic;
    return User;
}
