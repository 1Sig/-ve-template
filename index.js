// 13 May Sigurd Larsen Øwre

// Global modules 
const express = require('express');
const dotenv = require('dotenv').config();

// Local modules
const defualt_routes = require('./routes/default_routes')

//init
const app = express();
const PORT = process.env.PORT || 3000;

app.use(defualt_routes);

app.listen(PORT, startup);


function startup(){
    console.info(`Server is running on port ${PORT}`);
}