
const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth')

const router = express.Router();

const { Review } = require('../../db/models')
const { User } = require('../../db/models')

//reviews router

//get all reviews
router.get('/', asyncHandler(async (req, res) => {

    // find all the reviews in the DB through sequelize
    const reviews = await Review.findAll()

    // return the reviews to the client
    return res.json(reviews);
}));

// =================__PROTECTED
//create new review
router.post('/', restoreUser, asyncHandler(async (req, res) => {
    // destructure the body of the request for easy access
    const { description, productId } = req.body;
    const userId = req.user.id
    const name = req.user.username

    // create a new review and await promise return of creating new review
    // with the properties that are not auto-created by sequelize
    const newReview = await Review.create({ description, user_id: userId, product_id: productId, username: name });
    const reviews = await Review.findAll()

    // return the reponse after parsing to show the newly created review
    return res.json(
        reviews
    );
}))


// ===============__PROTECTED
//edit existing review
router.put('/', restoreUser, asyncHandler(async (req, res) => {

    console.log("REQUEST BODY", req.body)
    console.log(req.body.user_id)
    if (req.user.id === req.body.user_id) {
        //maybe this serves as a double check??
        const { newReviewDes, id } = req.body

        const reviewToUpdate = await Review.findByPk(id)

        // vanilla JS, update the old description to the new one
        reviewToUpdate.description = newReviewDes

        // allow it to save to the DB through sequelize...
        await reviewToUpdate.save()

        // return to view the newly edited review
    }

    const reviews = await Review.findAll()
    return res.json(reviews)
}))

// ==============__PROTECTED
//delete existing review
router.delete('/', restoreUser, asyncHandler(async (req, res) => {
    // console.log(req, req.body)
    if (req.user.id === req.body.user_id) {
        const reviewToDestroy = await Review.findByPk(req.body.id)
        await reviewToDestroy.destroy()
    }
    // return console.log('success')

    const reviews = await Review.findAll()
    return res.json(reviews)
}))

module.exports = router
