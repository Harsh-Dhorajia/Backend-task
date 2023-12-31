module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowEmpty: false,
      allowNull: false,
      isUnique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowEmpty: false,
      allowNull: false,
      isUnique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowEmpty: false,
      allowNull: false,
    },
    authToken: {
      type: DataTypes.STRING,
      allowEmpty: false,
      allowNull: true,
    },
  });

  User.associate = models => {
    User.hasMany(models.Tweet, {
      foreignKey: 'createdBy',
      as: 'tweets',
    });
    User.hasMany(models.Follower, {
      foreignKey: 'followed_id',
    });
    User.hasMany(models.Follower, {
      foreignKey: 'follower_id',
    });
  };
  return User;
};
