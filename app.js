
import express from "express";
import posts from "./routes/controllers/posts.js"

const app = express();
const PORT = 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/v1/posts", posts);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
