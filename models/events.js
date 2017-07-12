module.exports = function(sequelize, DataTypes){

	var Events = sequelize.define("Events", {
		EventID: {
			type: DataTypes.INTEGER,
			//autoIncrement: true,
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
		AddressID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		HostID: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		classMethods: {
  		associate: function(models) {
  			Events.hasMany(models.Registration, {
  				onDelete: "cascade",
  				foreignKey: EventID
  			});

  			Events.belongsTo(models.User, {
  				foreignKey: UserID
  			});

  			Events.hasMany(models.Review, {
  				foreignKey: EventID
  			});

  			Events.belongsTo(models.Address, {
  				foreignKey: AddressID
  			});
		}
	}
	});

	return Events;
};
