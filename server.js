const express = require('express');
require('dotenv').config();
const routes = require('./router/routes');
const bodyParser = require('body-parser');
const { db } = require('./database/connection');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api',  routes);





app.get('/', (req, res)=>{
   res.send("Working!")
})

app.listen(process.env.PORT, ()=>{
   db();
   console.log("running on port 4700");
})

module.exports = app;