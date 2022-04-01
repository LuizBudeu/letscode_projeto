import express from 'express';

const PORT = 3000;
const server = express();

server.use(express.json());   // usa pro negocio do postman

server.get("/", (request, response) => {   // '/' é a rota 
    console.log("hello web");

    response.send("Hello client");
});

server.get("/outro/", (request, response) => {   // '/outro/' é a rota 
    console.log("primeiro exercicio");

    response.send("<h1>meu site lindo</h1>");    // jeito tchola
});

server.get("/maisum/", (request, response) => {   // '/maisum/' é a rota 
    console.log(request.headers)

    const obj = {
        status: "ok",
        data: {
            username: "luiz",
            age: 20,
        },
    };

    // response.send(JSON.stringify(obj));
    // response.json(obj);   // mesma coisa q acima
    response.json(request.headers)
});


server.post("/echo", (req, res) => {
    console.log(req.body);
    res.send("ok")

    //res.json(req.body);
})


server.post("/login", (req, res) => {
    console.log(req.body.login);
    console.log(req.body.pswd);

    //res.json(req.body)

    res.send("tudo ok, login e senha confirmados")
})

server.listen(PORT, () => {  //3000 é a porta, acessar 'localhost:3000/'
    console.log("Estou pronto em desenvolvimento, na porta ${PORT}")
});




