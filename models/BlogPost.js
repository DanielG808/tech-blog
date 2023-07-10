const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // creator: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    // },
    // created_on: {
    //   type: DataTypes.DATE,
    //   defaultValue: new Date(),
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blogpost",
  }
);

module.exports = BlogPost;
