const e = require('express');
const dotenv = require('dotenv').config();

const app = e();

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`still listening on port: ${port}`);
})

