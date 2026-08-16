import { Router } from "express";
import productData from "../db/products.db.js";
const router = Router();

router.get("/products", (req, res) => {
    res.status(200).json(productData);
});

router.get("/products/:id",(req,res) => {
    const { id } = req.params;
    const product = productData.products.find(p => p.id === Number(id));
    
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json(product);
})

export default router;
