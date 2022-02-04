const router = require('express').Router();
const { LoginModel } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/login');

// POST USER LOGIN

router.post("/login", async (req, res) => {
    let { email, password, username, isAdmin } = req.body.user;
    let date = new Date();
    let current = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    try {
        const loginUser = await LoginModel.findOne({
        where: {
            email: email,
            username: username,
            isAdmin: isAdmin
        },
        });

        if (loginUser) {

            let passwordComparison = await bcrypt.compare(password, loginUser.password);

            if (passwordComparison) {

                let token = jwt.sign({idNumber: loginUser.idNumber, isAdmin: User.isAdmin}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

                res.status(200).json({
                    user: loginUser,
                    message:"User Logged in!",
                    sessionToken: token
                });
            } else {
                res.status(401).json({
                    message: "Incorrect Username or Password"
                })
            }
            
        } else {
            res.status(401).json({
                message: "Incorrect Username or Password"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to log user in"
        })
    }
});

module.exports = router;