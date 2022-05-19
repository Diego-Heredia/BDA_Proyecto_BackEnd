

export const queries ={
    getAllProducts: 'SELECT * from dbo.ViewProductos',
    getAllEntregas: 'select * from dbo.ViewEntregas',
    getAllInventario: 'select * from dbo.ViewInventario',
    getAllVentas: 'select * from dbo.ViewVentas',
    getAllCompras: 'select * from dbo.ViewProductosCLiente',
    // addNewProduct: 'INSERT INTO Products(name,description,quantity) VALUES (@name,@description,@quantity)',
    addNewProduct: 'execute dbo.CreacionProducto @TipoProducto=TipoProducto,@Bodega=Bodega, @Codigo=Codigo,@FormaVenta=FormaVenta,@Costo=Costo ,@Precio=Precio ,@Nacionalidad=Nacionalidad ,@Calidad=Calidad, @Perecedero=Perecedero ',
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProduct: 'DELETE FROM Products WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductById: 'UPDATE Products SET Name = @name, Description=@description, Quantity=@quantity WHERE Id=@id',
    getTotalEverything: 'select COUNT(*) as cuentaCompras from dbo.ViewProductosCLiente select COUNT(*) as cuentaInventario from dbo.ViewInventario select COUNT(*) as cuentaProductos from dbo.ViewProductos select COUNT(*) as cuentaEntregas from dbo.ViewEntregas select COUNT(*) as cuentaVentas from dbo.ViewVentas'
}