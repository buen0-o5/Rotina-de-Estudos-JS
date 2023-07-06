//selecionando a pasta desejada: cd aula06
//iniciando nmp: npm init -y   
//instalando express: npm install express
//iniciando servidor: node server.js
//para parar o servidor usa-se ctrl c


const express = require('express');
const app = express();

//                    CRUD 
//     CRIAR,   LER   ATUALIZAR  DELETAR
//     CREATE,  READ, UPDATE,    DELETE
//     POST,    GET,  PUT,       DELETE

app.get('/', (req, res)=>{
    res.send(`<h1>Hello world!</h1>
    <form action="/" method="POST">
    NOME: <input type="text" name="nome"/>
    <button>Enviar</button>
    `);
 
});
app.get('/contato',(req, res)=>{
    res.send('Obrigado por entrar em contato com a gente.')
});

app.post('/', (req, res)=>{
    res.send('Recebi o formulario');
});

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});