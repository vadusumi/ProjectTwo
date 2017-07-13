module.exports = function(sequelize, DataTypes){

	var Events = sequelize.define("Events", {
		EventID: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
            primaryKey: true,
            allowNull: false
		},
		EventName: {
			type: DataTypes.STRING,
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
		},
		AddressL1: {
      type: DataTypes.STRING,
        allowNull:true
    },
    AddressL2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ZipCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
	});

	Events.associate = function(models) {

		Events.belongsTo(models.User, {foreignKey: 'EventID', target:'HostID'});

		Events.hasMany(models.Review, {foreignKey: 'EventID'});
	};
	return Events;
};
