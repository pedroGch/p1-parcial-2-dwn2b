class Carrito{
  
  productos;
 
  constructor(){
    this.productos = [];
  }

  agregarProducto(producto){
    this.productos.push(producto);
  }

  devolverProductos(){
    return this.productos;
  }

  cantidadDeProductos(){
    return this.productos.length;
  }

  quitarProductoDelCarrito(idProducto){
    let producto = null; 

    this.productos.forEach(element => {
      if (element.id == idProducto){
        producto = element;
      }
    });


    this.productos.splice(this.productos.indexOf(producto), 1);
  }

  mostrarPrecioTotalDeLaCompra(){
    let total = 0;
    this.productos.forEach(p => {
      total += p.precio; 
    });
    return total; 
  }
}