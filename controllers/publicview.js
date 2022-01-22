// const Express = require("express");
// const router = Express.Router();
// const { UserListModel } = require("../models");

// router.get("/", async (req, res) => {
//     try {
//         const allMovieLists = await UserListModel.findAll({
//             where: {
//                 isPublic: true,
//                 }
//         });
//         res.status(200).json(allMovieLists);
//         console.log(allMovieLists);
//     } catch (err) {
//         res.status(500).json({error:err});
//     }
// });

// module.exports = router;