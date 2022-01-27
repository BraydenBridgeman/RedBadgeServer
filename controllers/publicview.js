const Express = require("express");
const router = Express.Router();
const { UserList } = require("../models");

// GET ALL USER LISTS

router.get("/", async (req, res) => {
    try {
        const allMovieLists = await UserList.findAll({
            where: {
                isPublic: true,
            }
        });
        res.status(200).json(allMovieLists);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

module.exports = router;