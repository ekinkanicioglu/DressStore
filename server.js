/* 
server.js
Ekin Kanicioglu
301306685
10-14-2023 */
const express = require('express');
const app = express();
const mongoose = require("mongoose");
var configDB = require('./config/db');
const router= require('./routes/products');

var message = "Welcome to Dress Store application.";
app.get('/', (req, res) => {
    res.send(message);
  });
  
app.use(router);

// app.get('/add', router);
// app.get('/list', router);
// app.get('/get/:productID', router);
// app.use('/edit/:productID', router);
// app.use('/delete/:productID', router);


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

//db module in config.js is called to connect to the mongodb
configDB();
