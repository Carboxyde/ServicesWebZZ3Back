
import express from "express";
import posts from "./routes/controllers/posts.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { MONGO } from "./conf/env";

const app = express();
const PORT = 5000;

mongoose.connect(
    MONGO,
    { useNewUrlParser: true }
);
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use("/api/v1/posts", posts);
    //app.use("/", Routes);

    const PORT = 5000;

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});
