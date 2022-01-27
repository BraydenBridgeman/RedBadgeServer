const Express = require('express');
const router = Express.Router();

const { MoviesModel } = require("../models");

// GET Movies

router.get("/getMovies", async (req, res) => {
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

module.exports = router;