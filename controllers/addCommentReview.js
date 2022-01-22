const Express = require('express');
const router = Express.Router();

const { CommentReviewModel } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// POST Comment-review

router.post("/comment-review", validateJWT, async (req, res) => {
    const { username, comment, reviewRating, reviewSection } = req.body.commentReview;
    const { idNumber } = req.user;
    const addCommentReview = {
        username: username,
        comment: comment,
        reviewRating: reviewRating,
        reviewSection: reviewSection,
        owner_id: idNumber
    }

    try {
        const createCommentReview = await CommentReviewModel.create(addCommentReview);
        res.status(200).json(createCommentReview);
    } catch (err) {
        res.status(500).json({ error: err, attempt: addCommentReview });
    }
});

module.exports = router;