if(process.env.NODE_ENV!="production")
    require('dotenv').config();

const express=require("express");
const mongoose=require("mongoose");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const path=require("path");
const app=express();
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const port=8080;
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate);
const ExpressError=require("./utils/ExpressError");
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const dbUrl=process.env.ATLASDB_URL;
const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
        touchAfter: 24*3600,
    }
});
store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE",err);
});
const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+(7*24*60*60*1000),
        maxAge:(7*24*60*60*1000),
        httpOnly:true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
});

// app.get("/demouser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"student@gmail.com",
//         username:"delta-student"
//     });
//     let registeredUser=await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// });

main()
    .then(()=>{console.log("Connected to DB.")})
    .catch(err => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
}

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

// app.get("/",(req,res)=>{
//     res.send("Root");
// });
app.use((req,res,next)=>{
    next(new ExpressError(404,"Page not found."));
});
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong."}=err;
    res.status(statusCode).render("listings/error.ejs",{err});
    // res.status(statusCode).send(message);
});
app.listen(port,()=>{
    console.log("Server is listening on port",port);
})