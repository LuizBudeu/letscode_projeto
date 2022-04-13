import mongoose from "mongoose";

// Schema
const ProductSchema = new mongoose.Schema({
    name: String,
})

// Model
const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;