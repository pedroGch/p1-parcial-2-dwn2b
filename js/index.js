'use strict';

/*
 *  APELLIDOS: SCOTTO, GONZALEZ CHAVEZ
 */

let arregloProductos = [
    {
        id: 1,
        nombre: 'Pack Armonía',
        descripcion: '100 mandalas imprimibles',
        precio: 1500,
        imagen: './img/prod-1.jpg',
        categoria: 'mandala',
    },
    {
        id: 2,
        nombre: 'Pack Luz',
        descripcion: '100 mandalas imprimibles',
        precio: 1500,
        imagen: './img/prod-2.jpg',
        categoria: 'mandala',
    },
    {
        id: 3,
        nombre: 'Pack Energía',
        descripcion: '100 mandalas imprimibles',
        precio: 1500,
        imagen: './img/prod-3.jpg',
        categoria: 'mandala',
    },
    {
        id: 4,
        nombre: 'Pack Infantil',
        descripcion: '50 dibujos imprimibles',
        precio: 1000,
        imagen: './img/prod-4.jpg',
        categoria: 'infantil',
    },
    {
        id: 5,
        nombre: 'Pack Simpleza',
        descripcion: '100 mandalas imprimibles',
        precio: 1500,
        imagen: './img/prod-5.jpg',
        categoria: 'mandala',
    },
    {
        id: 6,
        nombre: 'Pack Zen',
        descripcion: '50 zentangles imprimibles',
        precio: 1000,
        imagen: './img/prod-6.jpg',
        categoria: 'zentangle',
    },
];
let contenedorProducto = document.querySelector("#productosTienda");
let carritoDeCompras = new Carrito();
let cantidadDeProductos  = document.querySelector("#monstrarCantidad")

arregloProductos.forEach((p)=>{
    let productoObject = new Producto(p.nombre, p.descripcion, p.precio, p.imagen, p.categoria, p.id);
    
    contenedorProducto.append(productoObject.imprimirProducto());
})

function agregarAlCarrito(idProducto){
    let productoArreglo = arregloProductos[idProducto-1]; 
    let producto = new Producto(productoArreglo.nombre, productoArreglo.descriproductoArreglocion, productoArreglo.productoArreglorecio, productoArreglo.imagen, productoArreglo.categoria, productoArreglo.id)
    
    carritoDeCompras.agregarProducto(producto);
    cantidadDeProductos.innerText = carritoDeCompras.cantidadDeProductos(); 
}

function quitarProductoDelCarrito (idProducto){
    debugger
    //let id = idProducto-1;
    //carritoDeCompras.quitarProductoDelCarrito(id);
    carritoDeCompras.quitarProductoDelCarrito(idProducto);
    cantidadDeProductos.innerText = carritoDeCompras.cantidadDeProductos(); 

}