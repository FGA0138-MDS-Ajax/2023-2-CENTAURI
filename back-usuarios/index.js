const express = require("express")
const cors = require("cors")
const db = require("./db.js")
const cookieSession = require("cookie-session")
const passport = require("passport")
require("dotenv").config()

const app =  express();

const PORT = process.env.PORT || 8800;
app.use(cookieSession({
    name: 'authSession',
    keys: ["a829989984645-1n9j5s35r34n85fkj83hjiiisc6jg20e"],
    maxAge: 24*60*60*100
}))
app.use(cors({origin: "http://localhost:3000",  //only localhost:3000 can access this server
credentials: true}));

app.use(passport.initialize())
app.use(passport.session());

db.getConnection((err,connection) => {
    if(err)throw err;
    console.log("Connection to database is successful")
})

app.use('/auth', require('./routers/auth/passport.js'));

// app.use('/create_favorite', require('./routers/auth/old_favorites.js'));

// app.use("/",userRoutes);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})

