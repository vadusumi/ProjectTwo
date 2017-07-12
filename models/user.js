module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    userID:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name:{
       type: DataTypes.STRING,
       allowNull: false
     },
    addressID:{
      type:  DataTypes.INTEGER,
       allowNull: true
     },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  },
    {
    classMethods: {
    associate: function(models) {

      User.hasOne(models.Address, {
        foreignKey: 'AddressID',
        onDelete: "cascade"
      });

      User.hasMany(models.Events, {foreignKey: "HostID"});

      User.hasMany(models.Review, {foreignKey: "Reviewer"});

      User.hasMany(models.Review, {foreginKey: "ReviewSubject"});
    }
  }
}
);
    return User;
  };
