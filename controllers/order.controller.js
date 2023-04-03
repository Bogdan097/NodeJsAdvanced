import OrderModel from "../models/products.model.js";

const orderModel = new OrderModel();

class OrderController {
  async getAllProducts() {
    const products = await orderModel.getAllProducts();
    return products;
  }
  async addProduct(productData) {
    await orderModel.addProduct(productData);
  };
};

export default OrderController;

