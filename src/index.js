import express from 'express'
import productRouter from './routes/product.routes.js'

//Configuracion de express
const app = express()
const PORT = 8080

//Middleware
app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({ extended: true })) //Permite poder realizar consultas en la URL (req.query)

//Routes
app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})