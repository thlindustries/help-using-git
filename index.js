const express = require('express');

const app = express()

app.get('/teste',(req,res)=>{
    return res.json({hello:'Wolrd'})
});

app.listen(1234);