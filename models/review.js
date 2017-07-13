module.exports = function(sequelize, DataTypes){
	var Review = sequelize.define("Review", {
		ReviewID: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
            primaryKey: true,
            allowNull: false
		},
		Reviewer: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ReviewSubject: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ReviewTime: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		},
		Review: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		EventID: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		SubjectType:{
			type: DataTypes.STRING,
			allowNull: false
		}
});

Review.associate = function(models) {
	Review.belongsTo(models.User, {foreignKey:'ReviewID', target: 'Reviewer'});

};
return Review;
};
