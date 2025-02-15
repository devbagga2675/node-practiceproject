const e = require('express');
const app = e();
const port = 5000;

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})

