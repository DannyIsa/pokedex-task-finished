const express = require("express");
const cors = require("cors");
const api = require("./routes");
const app = express();
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.use(express.static("build"));

app.use("/api", api);

fs.writeFile('./collection.json', '[]', (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

module.exports = app;
