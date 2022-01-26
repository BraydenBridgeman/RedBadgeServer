const Express = require('express');
const router = Express.Router();

const { MoviesModel } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// POST Movie Information

router.post("/movies", validateJWT, async (req, res) => {
    const { movieName, yearReleased, genre, shortPlot, moviePoster } = req.body.movies;
    const addMovie = {
        movieName: movieName,
        yearReleased: yearReleased,
        genre: genre,
        shortPlot: shortPlot,
        moviePoster: moviePoster
    }
    try {
        const createMovies = await MoviesModel.create(addMovie);
        res.status(200).json(createMovies);
    } catch (err) {
        res.status(500).json({ error: err, attempt: addMovie });
    }
});

module.exports = router;