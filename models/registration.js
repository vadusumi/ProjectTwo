module.exports = function(sequelize, DataTypes){
	var Registration = sequelize.define("Registration", {
		RegID: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
            primaryKey: true,
            allowNull: false
		},
		Notes: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		TransactionID: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		EventID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		UserID: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	Registration.associate = function(models) {
		Registration.hasOne(models.Events, {foreignKey: 'RegID'});

		Registration.belongsTo(models.User, {foreignKey: 'RegID'});

		Registration.hasOne(models.Transaction);
	};
	return Registration;
};
