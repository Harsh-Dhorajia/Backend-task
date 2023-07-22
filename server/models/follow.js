module.exports = (sequelize, DataTypes) => {
    const Follower = sequelize.define("Follower", {
      user_id: {
        type: DataTypes.INTEGER,
        allowEmpty: false,
        allowNull: false,
      },
      follower_id: {
        type: DataTypes.STRING,
        allowEmpty: false,
        allowNull: false,
      },
    });
  
    Follower.associate = models => {
      Follower.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });
      Follower.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'follower_id',
        onDelete: 'CASCADE',
      });
    };
  
    return Follower;
  };
  