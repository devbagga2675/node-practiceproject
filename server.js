const express = require('express');
const e = require('express');
const errorHandler = require('./middleware/errorHandler').errorHandler
const dotenv = require('dotenv').config();

const app = e();

const port = 5001;



// .use is a middleware method. iddleware are functions that intercept and process requests and responses in an Express.js application, allowing you to perform tasks like logging, authentication, and error handling before the request reaches its final destination.
app.use(express.json()) //parser to convert the request body to json
app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));: This is like setting up a dedicated desk in your office.  Any mail (requests) addressed to /api/contact gets sent directly to that desk. The desk is staffed by the people (code) 
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`still listening on port: ${port}`);
})
