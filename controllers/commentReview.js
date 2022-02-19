const express = require('express');
const router = express.Router();

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