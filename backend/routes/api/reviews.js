
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
    //  const { productId } = req.params ?? //!Can I do this?

    //  need to ensure that this review is created by user...
    //  OR I could only make the update/delete button available in the React 
    //  component where the user's ID is equal to the Reviews.user_id
    //  this is probably the proper way to do this
    if (req.user.id === req.body.user_id) {
        //maybe this serves as a double check??
        const { newDescription } = req.body
        const { userId } = req.user.id

        //find the review to update, match possibly of the req.params
        //which will contain the product_id in the params
        const reviewToUpdate = await Review.findByPk()

        // vanilla JS, update the old description to the new one
        reviewToUpdate.description = newDescription

        // allow it to save to the DB through sequelize...
        await reviewToUpdate.save()

        // return to view the newly edited review
        return res.json({
            reviewToUpdate
        })
    }

}))

// ==============__PROTECTED
//delete existing review
router.delete('/', restoreUser, asyncHandler(async (req, res) => {
    if (req.user.id === req.body.user_id) {
        await Review.destroy({ where: { id: req.body.id } })
    }
}))

module.exports = router
