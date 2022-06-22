const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	sequelize.define(
		'type',
		{
			// El id lo hace sequelize por sí solo
			type: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
};
