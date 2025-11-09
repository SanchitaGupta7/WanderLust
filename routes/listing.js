const express=require("express");
const wrapAsync=require("../utils/wrapAsync");
const router=express.Router();
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({storage});

//NEW ROUTE
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,validateListing,upload.single("listing[image]"),wrapAsync(listingController.createListing));

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))
    .put(isLoggedIn,isOwner,validateListing,upload.single("listing[image]"),wrapAsync(listingController.updateListing));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

// router.get("/testListing",async(req,res)=>{
//     let sampleListing=new Listing({
//         title:"My New Villa",
//         description:"By the beach",
//         price:200,
//         location:"Calangute, Goa",
//         country:"India",
//     });
//     await sampleListing.save();
//     console.log("Sample was saved.")
//     res.send("Sample was saved.");
// });
module.exports=router;