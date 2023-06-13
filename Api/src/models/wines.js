const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo 
  sequelize.define('wines', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
        },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    winery:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail:{
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    category:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idReviews:{
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: []
    },
    banned:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {timestamps: false}
  );
};
