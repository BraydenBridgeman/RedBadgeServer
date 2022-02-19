const Express = require('express');
const router = Express.Router();

const { MoviesModel } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// GET Movies

router.get("/getMovies", validateJWT, async (req, res) => {
    try {
        const allMovies = await MoviesModel.findAll({
            where: {
                isPublic: true,
            }
        });
        res.status(200).json(allMovies);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// POST Movie Information

router.post("/movies", validateJWT, async (req, res) => {
    const { movieName, yearReleased, genre, shortPlot, moviePoster, isPublic } = req.body.movies;
    const addMovie = {
        movieName: movieName,
        yearReleased: yearReleased,
        genre: genre,
        shortPlot: shortPlot,
        moviePoster: moviePoster,
        isPublic: isPublic
    }
    try {
        const createMovies = await MoviesModel.create(addMovie);
        res.status(200).json(createMovies);
    } catch (err) {
        res.status(500).json({ error: err, attempt: addMovie });
    }
});

module.exports = router;