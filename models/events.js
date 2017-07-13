module.exports = function(sequelize, DataTypes){

	var Events = sequelize.define("Events", {
		EventID: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
            primaryKey: true,
            allowNull: false
		},
		EventType: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		StartTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		EndTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		Capacity: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		HostID: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	Events.associate = function(models) {

		Events.belongsTo(models.User, {foreignKey: 'EventID', target:'HostID'});

		Events.hasMany(models.Review, {foreignKey: 'EventID'});
	};
	return Events;
};
