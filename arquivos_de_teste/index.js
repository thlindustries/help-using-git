const express = require('express');

const app = express()

app.get('/teste',(req,res)=>{
    return res.json({hello:'Wolrd 2'})
});

app.get('/rota-nova',(req,res)=>{
    return res.json({hello:'Você está testando a rota nova'})
});

app.listen(1234);