import { Router } from "express";
import {getProducts,createNewProduct, getProductById, deleteProductById, getTotalProducts, updateProductById, getEntregas, getInventario, getVentas, getCompras, getTotalEverything, getUsers} from '../controllers/products.controller'

const router = Router()

router.get('/products',getProducts)

router.get('/entregas',getEntregas)

router.get('/inventario',getInventario)

router.get('/ventas',getVentas)

router.get('/compras',getCompras)

router.get('/usuarios',getUsers)

router.get('/products/todo/count',getTotalEverything)

router.post('/products',createNewProduct)

// router.get('/products/count',getTotalProducts)

// router.get('/products/:id',getProductById)

// router.delete('/products/:id',deleteProductById)

// router.put('/products/:id',updateProductById)


export default router