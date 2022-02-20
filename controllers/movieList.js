const express = require('express');
const router = express.Router();

const { UserList } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// POST User List

router.post("/list", validateJWT, async (req, res) => {
    const { listName, movieTitle } = req.body.userList;
    const { idNumber } = req.user;
    const addList = {
        listName: listName,
        movieTitle: movieTitle,
        owner_id: idNumber
    }
    try {
        const createList = await UserList.create(addList)
        res.status(200).json(createList)
    } catch (err) {
        res.status(500).json({ error: err, attempt: addList })
    }
});

// DELETE LIST

router.delete("/list/:userList_id", validateJWT, async (req, res) => {
    try {
        const query = {
            where: {
                idNumber: req.params.userList_id,
            }
        };
        
        await UserList.destroy(query);
        res.status(200).json({ message: "This list was deleted." });
    } catch (err) {
        res.status(500).json({error: err});
    }
})

// PUT (UPDATE) USER LIST NAME

router.put("/list/:userList_id", validateJWT, (req, res) => {
    const { listName, movieTitle } = req.body.userList;
    UserList.update({
        listName: listName,
        movieTitle: movieTitle
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