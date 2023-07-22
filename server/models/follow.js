module.exports = (sequelize, DataTypes) => {
    const Follower = sequelize.define("Follower", {
      followed_id: {
        type: DataTypes.INTEGER,
        allowEmpty: false,
        allowNull: false,
      },
      follower_id: {
        type: DataTypes.INTEGER,
        allowEmpty: false,
        allowNull: false,
      },
    });
  
    Follower.associate = models => {
      Follower.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'followed_id',
        // onDelete: 'CASCADE',
      });
      Follower.belongsTo(models.User, {
        as: 'follower',
        foreignKey: 'follower_id',
        // onDelete: 'CASCADE',
      });
    };
  
    return Follower;
  };
  