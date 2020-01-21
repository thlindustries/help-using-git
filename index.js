const express = require('express');

const app = express()

app.get('/teste',(req,res)=>{
    return res.json({hello:'Wolrd 2'})
});

app.listen(1234);