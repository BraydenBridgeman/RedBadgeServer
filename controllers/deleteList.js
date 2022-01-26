const Express = require('express');
const router = Express.Router();

const { UserList } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// DELETE LIST

router.delete("/list/:userList_id", validateJWT, (req, res) => {
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

module.exports = router;