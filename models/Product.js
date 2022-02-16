const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        }, 
        product_name: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        price: { 
            type: DataTypes.DECIMAL, 
            allowNull: false
        }, 
        stock: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }, 
        description: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        image: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        category_id: {
            type: DataTypes.INTEGER, 
            references:{
                model:'category', 
                key: 'id'

            }  
        }, 
        seller_id : {
            type: DataTypes.INTEGER, 
            references:{
             model:'user', 
            key: 'id'
            }
        },     
           user_id : {
            type: DataTypes.INTEGER, 
            references:{
            model:'user', 
            key: 'id'
            }
        }
    }, 
    {
        sequelize, 
        timestamps: false, 
        underscored: true, 
        freezeTableName: true,
        modelName: 'product'
    }
); 

module.exports = Product; 