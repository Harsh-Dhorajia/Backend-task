module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define("Tweet", {
    message: {
      type: DataTypes.STRING,
      allowEmpty: false,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowEmpty: false,
      allowNull: false,
    },
  });

  Tweet.associate = models => {
    Tweet.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'createdBy',
      onDelete: 'CASCADE',
    });
  };

  return Tweet;
};
