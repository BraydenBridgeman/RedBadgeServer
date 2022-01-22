const { DataTypes } = require("sequelize");
const db = require("../db");

const Movies = db.define('movies', {
    movieName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    yearReleased: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortPlot: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    moviePoster: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Movies;