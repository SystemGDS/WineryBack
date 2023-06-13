const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1,
      },
    },
  });
};

// id primario o primaryKey                        - B
//id del usuario                                   - viene de la relacion de tablas
//id del producto                                  - viene de la relacion de tablas
//el contenido o comentario                        - B
//el sistema de calificacion de estrellas          - B
//fecha del posteo
