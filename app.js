
import express from "express";
import posts from "./routes/controllers/posts.js"

const app = express();
const PORT = 5000;

app.use("/api/v1/posts", posts);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});