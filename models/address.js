module.exports = function(sequelize, DataTypes){

  var Address = sequelize.define( "Address", {
      addressID: {
        type: DataTypes.STRING,
        //autoIncrement: true,
        allowNull: false
      },
      AddressL1: {
        type: DataTypes.STRING,
          allowNull:false
      },
      AddressL2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false
      },
      State: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ZipCode: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

  },
  {
    classMethods: {
      associate: function(models){
      Address.belongsTo(models.User, {foreignKey: "AddressID"});

      Address.belongsTo(models.Events, {foreignKey: "AddressID"});

    }


  }
});
return Address;
};
