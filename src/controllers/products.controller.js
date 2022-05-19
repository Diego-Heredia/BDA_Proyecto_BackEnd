import {getConnection,sql,queries} from '../database'


export const getProducts = async (req,res)=> {
    try {
     
        res.status(200)
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);
        console.log(result);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getEntregas = async (req,res)=> {
    try {
     
        res.status(200)
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEntregas);
        console.log(result);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getInventario = async (req,res)=> {
    try {
     
        res.status(200)
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllInventario);
        console.log(result);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getVentas = async (req,res)=> {
    try {
     
        res.status(200)
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllVentas);
        console.log(result);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getCompras = async (req,res)=> {
    try {
     
        res.status(200)
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllCompras);
        console.log(result);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewProduct = async (req,res)=>{

    const {Name,Description} =req.body;
    let {Quantity} = req.body;
    
    if(Name == null ||Description == null){
        return res.status(400).json({msg: 'Bad request!! Please fill all fields!!'})
    }
    if(Quantity == null) Quantity = 0;
    try {
        const pool =await getConnection()
        pool.request()
        .input('name',sql.VarChar,Name)
        .input('description',sql.Text,Description)
        .input('quantity',sql.Int,Quantity)
        .query(queries.addNewProduct)
        console.log(Name, Description, Quantity);
        res.json({Name,Description,Quantity})
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductById = async (req,res)=>{

    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.getProductById)
    if(result.recordset[0] == undefined){
        return res.status(400).json({msg: 'Theres no ID matching'})
    }

    try {
        
    
        console.log(result.recordset[0]);
        res.json(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const deleteProductById = async (req,res)=>{

    try {
        const {id} = req.params;
    
        const pool = await getConnection();
        const result = await pool.request()
        .input('Id',id)
        .query(queries.deleteProduct)
    
        console.log(result);
        res.sendStatus(204);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getTotalProducts = async (req,res)=>{

    try {
        
    
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getTotalProducts)
    
        console.log(result);
        res.json(result.recordset[0]['']);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getTotalEverything = async (req,res)=>{

    try {
        
    
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getTotalEverything)
    
        console.log(result);
        // res.json(result.recordset[0]['']);
        res.json(result.recordsets);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateProductById = async (req,res)=>{

    const {Name,Description, Quantity} =req.body;
    const {id} = req.params;
    
    if(Name == null ||Description == null, Quantity == null){
        return res.status(400).json({msg: 'Bad request!! Please fill all fields!!'})
    }
    
    try {
        const pool =await getConnection()
        await pool.request()
        .input('name',sql.VarChar,Name)
        .input('description',sql.Text,Description)
        .input('quantity',sql.Int,Quantity)
        .input('id',sql.Int,id)
        .query(queries.updateProductById)
        console.log(Name, Description, Quantity);
        res.json({Name,Description,Quantity})
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

