import { Router } from "express";
import blogData from "../db/blogs.db.js";
const router=Router()

router.get("/blogs",(req,res) => {
    res.status(200).json(blogData)
})

router.get("/blogs/:id",(req,res) => {
    const { id } = req.params;
    const blogs = blogData.blogs.find(p => p.id === Number(id));
    
    if (!blogs) {
        return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json(blogs);
})


export default router
