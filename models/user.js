var bcrypt = require("bcrypt-nodejs");

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
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
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

//Associates for User table
User.associate = function(models) {

    User.hasMany(models.Events, {foreignKey: "HostID"});

    User.hasMany(models.Registration, {foreignKey: 'UserID'});

    User.hasMany(models.Review, {foreignKey: "Reviewer"});

  };

//hash password before Creating user
  User.hook('beforeCreate', function(user, options) {
    console.log("BEFORE HASH: " + user.password);
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    console.log("AFTER HASH: " + user.password);
  });

//instance function to validate password
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };


    return User;
  };
