const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model {}

    Image.init(
        {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.BLOB("long"),
      }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: "image",

      }
    );
    module.exports = Image;