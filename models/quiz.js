// Definicion del modelo de Quiz

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quiz',
		{ pregunta: DataTypes.STRING,
		  repuesta: DataTypes.STRING,
		});
}