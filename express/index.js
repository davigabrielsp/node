const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("ola")
});

app.get("/blog", function(req, res){
    res.send("blogsss")
});

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];
    if(canal){
        res.send("Canal:" + canal);
    }else{
        res.send("Sem Canal");
    }
})

app.get("/ola/:artigo", function(req, res){
    var artigo = req.params.artigo;

    if(artigo){
        res.send("artigo: " + artigo);
    } else {
        res.send("nenhum artigo encontrado");
    }
});

app.listen(4000,function(error){
    if(error){
        console.log("ocorreu um erro");
    }else{
        console.log("funcionando");
    }
});