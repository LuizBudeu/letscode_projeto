import express from 'express';
import productRouter from "./products.js";
import streamRouter from "./stream.js";
import canalRouter from "./canal.js";

const PORT = 3000;
const server = express();

server.use(express.json()); 
server.use("/products/", productRouter);
server.use("/stream/", streamRouter);
server.use("/canal/", canalRouter);



server.listen(PORT, () => {  //3000 é a porta, acessar 'localhost:3000/'
    console.log('Estou pronto em desenvolvimento, na porta ' + PORT);
});




