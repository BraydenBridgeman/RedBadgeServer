const Express = require('express');
const router = Express.Router();

const { CommentReviewModel } = require("../models");
const validateJWT = require('../middleware/validate-jwt');

// PUT (UPDATE) COMMENT BY ID

router.put("/comment-review/:commentReview_id", validateJWT, (req, res) => {
    const { username, comment, reviewRating, reviewSection } = req.body.commentReview;
    CommentReviewModel.update({
        username: username,
        comment: comment,
        reviewRating: reviewRating,
        reviewSection: reviewSection
    }, {
        where: {
            idNumber: req.params.commentReview_id
        }
    })
    .then(updateCommentReview => res.status(200).json(updateCommentReview))
    .catch(err => res.status(500).json({
        error: err
    }))
});


module.exports = router;