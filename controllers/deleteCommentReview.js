const Express = require('express');
const router = Express.Router();

const { CommentReviewModel } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// DELETE COMMENT-REVIEW

router.delete("/:commentReview_id", validateJWT, async (req, res) => {
    const { isAdmin } = req.user;
    if (isAdmin) {
        try {
            const query = {
                where: {
                    idNumber: req.params.commentReview_id,
                }
            };

            await CommentReviewModel.destroy(query);
            res.status(200).json({ message: "Comment and Review Removed" });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    } else {res.status(400).json({ message: "Admins can only Delete Comments and Reviews" })}
});

module.exports = router;