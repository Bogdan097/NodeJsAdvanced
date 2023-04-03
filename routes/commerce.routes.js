import { Router } from "express";

const productsController = Router();

import OrderController from "../controllers/order.controller.js";


const productRouter = Router();

const productController = new OrderController();

productRouter.get("/",async(req,res)=>{
    const products = await productController.getAllProducts();
    res.send(products);

});

productRouter.post("/",async(req,res)=>{
    const {name,description,price,reviews} = req.body;

    const productsData = {
        name: name,
        description: description,
        price: price,
        reviews: reviews,
    };
    await productsController.addProduct(productsData);
    res.status(200).send({message:"Product ordered"});
});

export default productRouter;


