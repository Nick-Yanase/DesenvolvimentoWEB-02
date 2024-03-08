const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo")
})

/*app.get("/", function(req,res){
    res.send("Pagina Principal")
})

    app.get("/Cadastrar", function(req,res){
        agendamentos.create({
            nome: "Nicolas gustavo"
        })
        res.send("Registro inserido com sucesso!")
    })*/