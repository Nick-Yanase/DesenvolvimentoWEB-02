/*ESTE PROJETO SO FUNCIONA COM 

-> NPM INSTALL EXPRESS --SAVE
-> NPM INSTALL SEQUELIZE --SAVE
-> NPM INSTALL MYSQL --SAVE

*/ 

const Sequelize = require ("sequelize")
const sequelize = new Sequelize("aula04", "root", "", {
    host: "localhost",
    dialect: "mysql"


})
sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado com sucesso")

}).catch(function(erro){
    console.log("Falaha ao conectar: "+erro)
})

const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type:Sequelize.STRING
    },
    endereco:{
        type:Sequelize.STRING
    },
    bairro:{
        type:Sequelize.STRING
    },
    CEP:{
        type:Sequelize.STRING
    },
    cidade:{
        type:Sequelize.STRING
    },
    estado:{
        type:Sequelize.STRING
    },
    observacao:{
        type:Sequelize.STRING
    }
})
/*agendamentos.sync({force: true}) vai criar a tabela e os atributos, quando rodar o banco*/ 

module.exports = agendamentos