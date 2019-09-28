const express = require('express');

const app = express();

//Routes
app.get('/', (req, res) => {
    res.send("We are On Home");
});

//booting up the server
app.listen(3000);
