const { DataTypes } = require('sequelize');
const db = require('../db');

const CommentReviewModel = db.define("commentReview", {
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
        unique: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reviewRating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reviewSection: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = CommentReviewModel;