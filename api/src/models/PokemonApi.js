const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('PokemonApi', {
    id:{
      type: DataTypes.INTEGER
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    types:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    gif:{
      type: DataTypes.STRING,
      defaultValue: "https://image.pngaaa.com/169/1906169-middle.png"
    },
    vida:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuerza:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    defensa:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    velocidad:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    peso:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    altura:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },{
    // timestamps: false
    timestamps: true,
    createdAt: false,
    updatedAt: 'actualizado',
    initialAutoIncrement : 1000
  })
};
