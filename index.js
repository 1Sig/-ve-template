// 13 May Sigurd Larsen Øwre

// Global modules 
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

// Local modules
const defualt_routes = require('./routes/default_routes')

//init
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(defualt_routes);

app.listen(PORT, startup);

async function startup(){
    db = await mongoose.connect('mongodb://10.12.15.70/demo-app')
      .then(() => {
        console.log('Connected to MongoDB');
      })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    console.info(`Server is running on port ${PORT}`);
}
