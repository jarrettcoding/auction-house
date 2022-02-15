const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");

Product.belongsTo(Category, {
    foreignKey: "category_id",
  });
  
  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: "category_id",
  });
  
  User.belongsTo(Product, {
    foreignKey: "seller_id",
  });
  
  User.hasMany(Product, {
    foreignKey: "seller_id",
  });
  
  User.belongsTo(Product, {
    foreignKey: "user_id",
  });
  
  User.hasMany(Product, {
    foreignKey: "seller_id",
  });

module.exports = { User, Product, Category };
