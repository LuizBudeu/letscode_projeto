import express from 'express';
/* import productRouter from "./routes/products.js";
import streamRouter from "./routes/stream.js";
import canalRouter from "./routes/canal.js"; */
import { streamRouter, canalRouter } from '../../projetinho/src/routes/index.js';
import { PORT } from '../../projetinho/src/constants.js';
import "./database/index.js"


const server = express();

server.use(express.json());
server.use('/stream/', streamRouter);
server.use('/canal/', canalRouter);


server.listen(PORT, () => { // 3000 é a porta, acessar 'localhost:3000/'
  console.log(`Estou pronto em desenvolvimento, na porta ${PORT}`);
});
