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
let cantidadDeProductos  = document.querySelector("#monstrarCantidad");
let removerTodosLosProductos = document.querySelector("#removeAllProd")

function mostrarTodosLosProductos(arreglo){
    arreglo.forEach((p)=>{
        let productoObject = new Producto(p.nombre, p.descripcion, p.precio, p.imagen, p.categoria, p.id);
        contenedorProducto.append(productoObject.imprimirProducto());
    })
}

function agregarAlCarrito(idProducto){
    let productoArreglo = arregloProductos[idProducto-1]; 
    let producto = new Producto(productoArreglo.nombre, productoArreglo.descripcion, productoArreglo.precio, productoArreglo.imagen, productoArreglo.categoria, productoArreglo.id);
    carritoDeCompras.agregarProducto(producto);
    cantidadDeProductos.innerText = carritoDeCompras.cantidadDeProductos(); 
    
    let contenedorItemProducto = document.querySelector("#contenedorItemCarrito");

    let misProductos = carritoDeCompras.devolverProductos();
    contenedorItemProducto.replaceChildren();
    totalCompra ();
    misProductos.forEach(element => {
        contenedorItemProducto.append(carritoDeCompras.mostrarCardProducto(element));
    });
}

function quitarProductoDelCarrito (idProducto){

    carritoDeCompras.quitarProductoDelCarrito(idProducto);
    cantidadDeProductos.innerText = carritoDeCompras.cantidadDeProductos(); 

}

function totalCompra (){
    let tuTotal = document.querySelector(".tuTotal");
    tuTotal.innerText = carritoDeCompras.mostrarPrecioTotalDeLaCompra(); 
}

vaciarCarrito.addEventListener("click", function(){
    carritoDeCompras.quitarTodosLosProducto();
    document.querySelector("#contenedorItemCarrito").replaceChildren();

    totalCompra ();
    cantidadDeProductos.innerText = carritoDeCompras.cantidadDeProductos(); 

});

document.querySelector("select").addEventListener("change", (e) => {
    
    let categoria = e.target.value;
    if (categoria != "todas"){
        let filtrado = arregloProductos.filter((p) => p.categoria.includes(categoria));
    
        contenedorProducto.replaceChildren();
        mostrarTodosLosProductos(filtrado);
        
    }else{
        contenedorProducto.replaceChildren();
        mostrarTodosLosProductos(arregloProductos);
    }

    //insertar html aca
    //document.querySelector("#peliculas").replaceChildren(...filtradoHTML);
});




mostrarTodosLosProductos(arregloProductos);
