const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            references:{
                model: 'User',
                key: 'id'
            }

        },
        comment_text:{
            type:DataTypes.STRING
        },
    },{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',

    }
);

module.exports = Comment;