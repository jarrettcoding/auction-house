const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false
        }, 
        category_name: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    }, 
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: false, 
        modelName: 'category'
    }
); 

module.exports = Category; 