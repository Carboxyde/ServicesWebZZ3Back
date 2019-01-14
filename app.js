
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './routes/routes';
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

    app.use("/", routes);


    app.listen(process.env.PORT, () => {
        console.log(`server running on port ${process.env.PORT}`);
    });
});
