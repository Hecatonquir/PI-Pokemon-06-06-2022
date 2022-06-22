/* const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('pokes_Db', {
		// ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
		ID: {
			primaryKey: true,
			allowNull: false,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		hp: {
			type: DataTypes.INTEGER,
		},
		attack: {
			type: DataTypes.INTEGER,
		},
		defense: {
			type: DataTypes.INTEGER,
		},
		speed: {
			type: DataTypes.INTEGER,
		},
		height: {
			type: DataTypes.INTEGER,
		},
		weight: {
			type: DataTypes.INTEGER,
		},
	});
};
 */