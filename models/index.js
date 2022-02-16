const Product = require("./Product");
const Category = require("./Category");
const User = require("./User");

Product.belongsTo(Category, {
    foreignKey: "category_id",
  });
  
  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: "category_id",
  });
  
  User.hasMany(Product, {
    as:'sellerid',
    foreignKey: "seller_id",
 
  });
  User.hasMany(Product, {
    as:'buyerid',
    foreignKey: 'buyer_id',

  });
  Product.belongsTo(User, {
    as:"sellerid",
    foreignKey: 'seller_id',
  });

  Product.belongsTo(User,{
    as: 'buyerid',
    foreignKey: 'buyer_id',
  });

module.exports = { Product, Category, User };
