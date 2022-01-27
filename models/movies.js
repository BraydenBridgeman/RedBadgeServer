const { DataTypes } = require("sequelize");
const db = require("../db");

const MoviesModel = db.define('movies', {
    movieName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    yearReleased: {
        type: DataTypes.INTEGER,
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
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
});

module.exports = MoviesModel;