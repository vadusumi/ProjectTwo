module.exports = function(sequelize, DataTypes){
	var Registration = sequelize.define("Registration", {
		RegID: {
			type: DataTypes.INTEGER,
			//autoIncrement: true,
            primaryKey: true,
            allowNull: false
		},
		Notes: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		TransactionID: {
			type: DataTypes.INTEGER,
			allowNull: false
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
			Registration.belongsTo(models.Events, {
				foreignKey: id,
				onDelete: "cascade"
			});
			Registration.belongsTo(models.User, {
				foreignKey: UserID
			});
			Registration.hasOne(models.Transaction, {
				foreignKey: TransactionID
			});

	};
	return Registration;
};
