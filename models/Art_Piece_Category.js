const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');


class Art_Piece_Category extends Model {}


Art_Piece_Category.init(
    {
        Art_Piece_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
          Category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'art-piece-category',
      });
    
  module.exports = Art_Piece_Category;