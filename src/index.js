import express from 'express';

const server = express();

server.get("/", (request, response) => {   // '/' é a rota 
    console.log("hello web");

    response.send("Hello client");
});

server.get("/outro/", (request, response) => {   // '/outro/' é a rota 
    console.log("hello web");

    response.send("<h1>meu site lindo</h1>");
});


server.listen(3000, () => {  //3000 é a porta
    console.log("Estou pronto")
});




