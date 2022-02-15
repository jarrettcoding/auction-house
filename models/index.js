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
  
  Product.hasMany(User, {
    foreignKey: "seller_id",
  });
  
  User.belongsTo(Product, {
    foreignKey: "user_id",
  });
  
  Product.hasMany(User, {
    foreignKey: "seller_id",
  });

module.exports = { User, Product, Category };
