import mongoose from "mongoose";

import productSchema from "../mongo_schemas/product_schema.js";

class OrderModel {
    mongo_model;

  constructor() {
    this.mongo_model = mongoose.model("Product", productSchema, "Products");
  }

  async getAllProducts() {
    const products = await this.mongo_model.find();
    return products

  };

  async addProduct(productData){
    const products = new this.mongo_model (productData);
    const response = await products.save();
    console.log(response);
  }
}
export default OrderModel;



