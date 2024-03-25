const express = require('express');
const app = express();

app.get("/", (req,res) => {
    res.send("Welcome to my Erick's backend application");
});

app.get("/erick",(req,res) => {
    res.send("Hello Erick!");
});

app.listen(3000, () => {
    console.log("Listening");
});