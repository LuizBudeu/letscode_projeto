import express from 'express';
/* import productRouter from "./routes/products.js";
import streamRouter from "./routes/stream.js";
import canalRouter from "./routes/canal.js"; */
import { productRouter, streamRouter, canalRouter } from './routes/index.js';
import { PORT } from './constants.js';

const server = express();

server.use(express.json());
server.use('/products/', productRouter);
server.use('/stream/', streamRouter);
server.use('/canal/', canalRouter);


server.listen(PORT, () => { // 3000 é a porta, acessar 'localhost:3000/'
  console.log(`Estou pronto em desenvolvimento, na porta ${PORT}`);
});
