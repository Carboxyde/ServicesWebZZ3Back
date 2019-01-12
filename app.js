
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { MONGO } from "./conf/env";
import routes from './routes/routes';

const app = express();
const PORT = 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/v1/posts", posts);
mongoose.connect(
    MONGO,
    { useNewUrlParser: true }
);
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use("/", routes);

    const PORT = 5000;

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});
