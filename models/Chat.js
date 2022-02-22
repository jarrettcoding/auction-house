const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Chat extends Model {}

Chat.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true, 
        }, 
        userId: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'user', 
                key: 'id'
            }
        }, 
        username: {
            type: DataTypes.STRING, 
            allowNull: false, 
            references: {
                model: 'user', 
                key: 'username'
            }
        }, 
        product: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            references: {
                model: 'product', 
                key: 'id'
            } 
        }
    },
    {
        sequelize, 
        timestamps: true, 
        underscored: true, 
        freezeTableName: true,
        modelName: 'chat'
    }
)