const { DataTypes } = require('sequelize');
const db = require('../db');

const CommentReview = db.define("commentReview", {
    idNumber: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reviewRating: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    reviewSection: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = CommentReview;