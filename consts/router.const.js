import { Router } from "express";

import productRouter from "../routes/commerce.routes.js";


const router = Router();

router.get('/', (req, res) => {
    res.send("Server is live.")
});

router.use('/products',productRouter);

// Here add the rest of the routes or routers

export default router;