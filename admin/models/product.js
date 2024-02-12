import { Schema } from "mongoose";
const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});
export const Product = module("Product", ProductSchema);
