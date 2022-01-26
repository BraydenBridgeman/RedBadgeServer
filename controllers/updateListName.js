const Express = require('express');
const router = Express.Router();

const { UserList } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// PUT (UPDATE) USER LIST NAME

router.put("/list/:userList_id", validateJWT, (req, res) => {
    const { listName, movieTitle, hasWatched, toWatch } = req.body.userList;
    UserList.update({
        listName: listName,
        movieTitle: movieTitle,
        hasWatched: hasWatched,
        toWatch: toWatch
    }, {
        where: {
            idNumber: req.params.userList_id
        }
    })
    .then(updateUserList => res.status(200).json(updateUserList))
    .catch(err => res.status(500).json({
        error: err
    }))
});

module.exports = router;