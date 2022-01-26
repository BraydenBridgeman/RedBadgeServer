const Express = require('express');
const router = Express.Router();

const { CommentReviewModel } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// DELETE COMMENT-REVIEW

router.delete("/:commentReview_id", validateJWT, (req, res) => {
    try {
        const query = {
            where: {
                idNumber: req.params.commentReview_id,
            }
        };

        await CommentReviewModel.destroy(query);
        res.status(200).json({ message: "Comment and Review Removed" });
    } catch (err) {
        res.status(500).json({error: err});
    }
})

module.exports = router;