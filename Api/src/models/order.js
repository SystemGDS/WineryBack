const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "order",
    {
          id:{
            type: DataTypes.BIGINT ,
            primaryKey: true,
              },
          userId:{
            type: DataTypes.INTEGER,
          },
            items:{
            type: DataTypes.ARRAY(DataTypes.JSON),
            },
           
          status:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          statusDetail:{
            type: DataTypes.ENUM("In process", "Paid", "Shipped", "Delivered", "Cancelled"),
            defaultValue: "In process"
          },
          datePayment: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          total: {
            type:DataTypes.INTEGER
          }

    },
    { timestamps: false }
  );
};
