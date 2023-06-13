const { DataTypes, INTEGER } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("cart", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId:{
      type: DataTypes.INTEGER
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: [],
    },
    total: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  },
 { timestamps: false}
  );

};

// nota: esta seria una tabla intermedia entre los productos y el usuario
// id del carrito del usuario - B
// id del usuario - viene de la relacion de tablas
// id de los productos a comprar por el usuario - B
// incluir el total de la compra del usuario ( producto.precio.1 + precio) - B
// fecha en que se realiza la orden???
