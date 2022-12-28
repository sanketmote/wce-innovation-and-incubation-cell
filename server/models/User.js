const Sequelize = require('sequelize');
const db = require('../configuration/config');

const User = db.sequelize.define(
    'User',
    {
        username: {
            type: Sequelize.DataTypes.STRING(45),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        name:{
            type: Sequelize.DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: Sequelize.DataTypes.STRING(64),
            allowNull: false,
        },
        role: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        }
    }, {
    tableName: 'User'
}
);

//Export
module.exports = User;