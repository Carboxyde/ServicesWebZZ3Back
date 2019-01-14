
import express from "express";
import posts from "./routes/controllers/getPosts.js";
import create from "./routes/controllers/creationPost";
import mongoose from "mongoose";
import bodyParser from "body-parser";
require('dotenv').config({ path: 'conf/.env' });


const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(
    process.env.MONGO,
    { useNewUrlParser: true }
);
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use("/api/v1/Post", posts);
    app.use("/api/v1/Create", create)
    //app.use("/", Routes);


    app.listen(process.env.PORT, () => {
        console.log(`server running on port ${process.env.PORT}`);
    });
});
