const { DataTypes } = require('sequelize');
const db = require('../db');

const UserList = db.define('userList', {
    idNumber: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    listName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    movieTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hasWatched: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    toWatch: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});

module.exports = UserList;