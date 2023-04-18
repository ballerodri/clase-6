import { Router } from "express";
import { ProductManager } from "../ProductManager.js";

const productManager = new ProductManager('./productos.txt')

const productRouter = Router() //productRouter voy a definir mis rutas

productRouter.get("/", async (req, res) => {
    const products = await productManager.getProducts(req.query.limit)
    res.send(products)
})

productRouter.get("/:id", async (req, res) => {
    const product = await productManager.getProductById(req.params.id)
    res.send(product)
})

export default productRouter