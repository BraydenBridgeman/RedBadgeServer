const express = require("express");
const router = express.Router();
let validateJWT = require("../middleware/validate-jwt");
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

// GET USER LIST BY USER ID

router.get("/:user_id", validateJWT, async (req, res) => {
    const { idNumber } = req.user;

    try {
        const myUserList = await UserList.findOne({
            where: {
                idNumber: req.params.user_id
            }
        });
        res.status(200).json(myUserList);
    } catch (err) {
        res.status(500).json({ error: `${idNumber}`});
    }
});

module.exports = router;