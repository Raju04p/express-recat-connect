

const express = require ('express');


const app = express();
const port = 5000;

app.get( "/api", (req,res) => {
    res.json({"user": ["userone","user two","user three"]})
})

app.listen( port, () => {
    console.log ("server start  in port 5000")
})