const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, ()=>{
    console.log('***Server Started at Port: '+port+'***')
});