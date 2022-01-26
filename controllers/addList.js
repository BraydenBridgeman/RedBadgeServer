const Express = require('express');
const router = Express.Router();

const { UserList } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// POST User List

router.post("/list", validateJWT, async (req, res) => {
    const { listName, movieTitle, hasWatched, toWatch } = req.body.userList;
    const { idNumber } = req.user;
    const addList = {
        listName: listName,
        movieTitle: movieTitle,
        hasWatched: hasWatched,
        toWatch: toWatch,
        owner_id: idNumber
    }
    try {
        const createList = await UserList.create(addList)
        res.status(200).json(createList)
    } catch (err) {
        res.status(500).json({ error: err })
    }
});


module.exports = router;