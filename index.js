const{connection} = require('./mongodb/connection')

connection();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get("/",function(req,res){
    res.render("index")
})

app.get("/home",function(req,res){
    res.render("home")
})

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})
