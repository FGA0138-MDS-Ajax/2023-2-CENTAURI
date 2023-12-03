const router = require("express").Router()
const googleStrategy = require("passport-google-oauth20").Strategy
const passport = require("passport")
const jwt = require("jsonwebtoken")
const cookieSession = require("cookie-session")
const db = require("../../db")
require('dotenv').config()

passport.serializeUser((user, done) => {
    done(null, user);
})

//deserialize are used to set id as a cookie in the user's browser and to get the id from the cookie when it then used to get user info in a callback.
passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(
    new googleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,  //passing CLIENT ID
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, //Passing CLIENT SECRET, You can get this form https://console.cloud.google.com/, to know more go on line 113 of this file.
            callbackURL: "http://localhost:8800/auth/google/callback",  //This means after signin on what route google should redirect
            scope: ['profile', 'email']
        },
        (accessToken, refreshToken, profile, cb) => {  //After successful signin, we have access of these thing which are in parameters
            // we are checking wehther the user is already added to our database or not, if already exist we can directly give a callback age we can redirect the user to any page we are redirecting it on home page, this functionality is not written in this function, you can check line no. 72.
            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);
            
            db.query(
                "select * from USER where token = ?",
                [profile.id],
                (err, user) => {
                    if (err) {
                        cb(err, false);
                        console.log("eroo aqui?");
                    }
                    if (!err && user.length != 0) {  // checking whether user exist or not
                        return cb(null, user);
                    } else {
                        // if user dosen't exist, we are adding the user to database
                        db.query(
                            "insert into USER set email = ?,  userName = ?, token = ?",
                            [ profile.emails[0].value, profile.displayName, profile.id,],
                            (err, userAdded) => {
                                if (err) {
                                    return cb(err, false);
                                    console.log("err dectected");
                                } else {
                                    db.query(
                                        "select * from USER where token = ?",
                                        [profile.id],
                                        (err, user) => {
                                            console.log("Login/Sign in successfully");
                                            return cb(null, user);

                                        })

                                }
                            }
                        );
                    }
                }
            );
        }
    )
);

// Passing google authenticate method as a middleware
router.get('/google', passport.authenticate('google', {
    scope: ['profile', "email"]
}));

// after signin the google will redirect to this route as we have added this route in callbace URL on line no 26
router.get("/google/callback", passport.authenticate("google",), (req, res) => {
    //If user exist than ...
    if (req.user) {
        console.log("the use is", req.user[0]); //Just for debugging
        //Creating a unique token using sign method which is provided by JWT, remember the 2nd parameter should be a secret key and that should have atleast length of 20, i have just passed 'rahulnikam' but you should not do the same and this should be kept in environment variable so that no one can see it
        const googleAuthToken = jwt.sign({ googleAuthToken: req.user[0].googleId }, "batataQUENTEQUENTEQUENTEQUEIMOU", { expiresIn: 86400000 })
        res.cookie("googleAuthToken", googleAuthToken, { expires: new Date(Date.now() + 86400 * 1000), httpOnly: true })
        // we are now redirecting the user to localhost:3000 which is our frontend
        res.redirect("http://localhost:3000/pesquisa")
    }
});

// we are making a request fron frontend to localhost:5000/auth/login/success, and we are sending user data (remember that don't pass any confidential data line user password or any other)
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: [req.user[0].userName, req.user[0].emails, req.user[0].userImg]
        });
    }
    else{
        console.log("deu ruim");
    }
});

router.get("/logout", (req, res) => {
    req.logout();
    res.json({
        logout: req.user
    })
});


module.exports = router