'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    labor_estimate: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    product_type: DataTypes.STRING,
    product_description: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};