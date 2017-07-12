module.exports = function(sequelize, DataTypes){
	var Transaction = sequelize.define("Transaction", {
		TransactionID: {
			type: DataTypes.INTEGER,
			//autoIncrement: true,
            primaryKey: true,
            allowNull: false
		},
		Amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		TransactionTime: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		}
	},
	{
		classMethods: {
  		associate: function(models) {
  			Transaction.belongsTo(models.Registration, {
  				foreignKey: TransactionID,
  			});
			}
		}
	}
);
 return Transaction;
};
