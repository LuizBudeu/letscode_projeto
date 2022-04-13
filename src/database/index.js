import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/aula_db")
    .then(() => console.log("conectado"));


/* // Schema
const ProductSchema = new mongoose.Schema({
    name: String,
})

// Model
const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel; */