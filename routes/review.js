const express=require("express");
const wrapAsync=require("../utils/wrapAsync");
const reviewController=require("../controllers/reviews.js");
const router=express.Router({mergeParams:true});
const {validateReview,isLoggedIn, isReviewAuthor}=require("../middleware.js");

//Reviews
//POST REVIEW ROUTE
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
//DELETE REVIEW ROUTE
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;