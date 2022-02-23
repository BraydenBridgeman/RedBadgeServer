const { DataTypes } = require('sequelize');
const db = require('../db');


const User = db.define('user', {
    idNumber: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    enum: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    passReset: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = User;