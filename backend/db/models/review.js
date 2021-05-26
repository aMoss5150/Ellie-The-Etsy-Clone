'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'user_id' })
    Review.belongsTo(models.Product, { foreignKey: 'product_id' })
  };
  return Review;
};