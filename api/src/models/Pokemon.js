const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    types:{
      type: DataTypes.JSON,
      allowNull: false
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    gif:{
      type: DataTypes.STRING,
      allowNull: false,
  }},{
    // timestamps: false
    timestamps: true,
    createdAt: false,
    updatedAt: 'actualizado'
  })
};



