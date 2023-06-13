const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo 
  sequelize.define('users', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
        },
    name:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true
      }
    },
    userName:{
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true
    },
    direction:{
      type: DataTypes.STRING,
    },
    favorites:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    isAdmin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    banned:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    imagen:{
      type: DataTypes.STRING,
      defaultValue: "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
      validate:{
        isUrl: true,              
      }
    }

  }, {timestamps: false}
  );
};
