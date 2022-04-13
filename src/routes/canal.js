import { Router } from 'express';
import mongoose from "mongoose";
import ProductModel from "../database/models/products.js"


/* mongoose.connect("mongodb://localhost:27017/aula_db")
    .then(() => console.log("conectado"));


// Schema
const ProductSchema = new mongoose.Schema({
    name: String,
})

// Model
const ProductModel = mongoose.model("Product", ProductSchema); */

/* const meuProduto = new ProductModel();

meuProduto.name = "shampoo";
meuProduto.save()
    .then(() => console.log("salvo"))
    .catch(() => console.error(e)) */

/* ProductModel
    .find()
    .then((objs) => console.log(objs))
    .catch(() => console.error(e)); */



const router = new Router();

// GET /canal/aberto?followers=1000
// Read
router.get('/', (req, res) => {

  ProductModel
  .find()
  .then((objs) => console.log(objs))
  .catch(() => console.error(e));

  res
    .status(200)
    .json(req.body);
});

// Create
router.post('/', (req, res) => {
  const meuProduto = new ProductModel();
  meuProduto.name = "teste";
  meuProduto.save()
    .then(() => console.log("criou"))
    .catch((e) => console.error(e));


  res
    .status(200)
    .json(req.body);

});

// Update
router.patch('/', (req, res) => {
  ProductModel.updateOne({name: "teste"}, {name: "novo nome"})
    .then(() => console.log("updated"))
    .catch((e) => console.error(e));

  res
    .status(200)
    .json(req.body);
});

// Delete
router.delete('/', (req, res) => {
  ProductModel.deleteOne({name: "teste"})
    .then(() => console.log("deleted"))
    .catch((e) => console.error(e));

  res
    .status(200)
    .json(req.body);
});

export default router;
