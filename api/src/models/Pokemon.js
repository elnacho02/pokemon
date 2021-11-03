const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    /* types:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    }, */
    img:{
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
  })
};



