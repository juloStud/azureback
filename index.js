const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');


app.use(cors());

const fruits = ["pomme","poire","fraise","kiwi","banane"];

app.get("/", (req,res) => {
    res.send("Serveur back de Jules");
})

app.get("/getFruits", (req,res) => {
    res.json(fruits);
})

app.listen(port, ()=>{
    console.log(`Serveur démarré sur le port ${port}`)
})
