import express from 'express'
import config from './config'
import productsRoutes from './routes/products.routes'
// import cors from 'cors'
var cors = require('cors')

const app = express();

//settings

app.set('port', config.port)

app.use(cors({
    origin: '*'
}))
// middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(productsRoutes)

export default app