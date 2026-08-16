import express from "express"
import dotenv from 'dotenv';
import blogsRouter  from "./routes/blogs.route.js"
import portfolioRouter  from "./routes/portfolio.route.js"
import productRouter  from "./routes/products.route.js"



dotenv.config()
const app = express()

app.use('/api',blogsRouter)
app.use('/api',portfolioRouter)
app.use('/api',productRouter)

app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT || 8000}`)
})