
import express from "express";
import posts from "./routes/controllers/getPosts.js";
import create from "./routes/controllers/creationPost";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

mongoose.connect(
    "mongodb://admin:admin6@ds026558.mlab.com:26558/zzinsta",
    {useNewUrlParser: true}
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

    const PORT = 5000;

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});

