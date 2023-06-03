const express = require("express");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "front-end", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "index.html"))
});

app.listen(port, hostname, () => console.log("Server running ..."));