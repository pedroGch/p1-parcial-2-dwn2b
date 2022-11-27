class Producto{
  nombre;
  descripcion;
  precio;
  urlImagen;
  categoria;
  id;

  constructor(nombre, descripcion, precio,imagen, categoria, id){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.urlImagen = imagen;
    this.categoria = categoria;
    this.id = id;
  }
  
  imprimirProducto() {
    //este es el div contenedor del card
    let divContenedorProducto = document.createElement("div");
    divContenedorProducto.className = "col-12 col-sm-10 col-md-6 col-lg-4 mx-auto";

    //este es el div car
    let divCard = document.createElement("div");
    divCard.className = "card  shadow-sm mx-auto bg-light-violet";
    divCard.style.width = "18rem";
    divCard.setAttribute("data.id",`${this.id}`);

    //esta imagen va dentro del div card
    let imgCardPrducto = document.createElement("img");
    imgCardPrducto.className = "img-fluid";
    imgCardPrducto.setAttribute("src",`${this.urlImagen}`);
    imgCardPrducto.setAttribute("alt",`mandala con colores vibrantes`);

    //este es el body del card
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    
    //titulo del div card-body
    let tituloCardBody = document.createElement("h3");
    tituloCardBody.className = "card-title fs-4 fw-bold";
    tituloCardBody.innerText = `${this.nombre}`;

    //descripcion del producto 
    let descriptCardBody = document.createElement("p");
    descriptCardBody.className = "card-text";
    descriptCardBody.innerText = `${this.descripcion}`;


    //precio del producto
    let precioCardBody = document.createElement("p");
    precioCardBody.className = "fs-3 fw-semibold";
    precioCardBody.innerText = `${this.precio}`;

    //boton de compra del producto
    let botonCompraCardBody = document.createElement("button");
    botonCompraCardBody.className = "btn shadow-sm btn-violet-gradient w-100 mb-3 addCart";
    botonCompraCardBody.innerText = "agregar al carrito";
    botonCompraCardBody.setAttribute("onclick",`agregarAlCarrito(${this.id})`);


    let botonDetalleCardBody = document.createElement("button");
    botonDetalleCardBody.className = "btn shadow-sm btn-violet-gradient w-100";
    botonDetalleCardBody.innerText = "detalle";
    botonDetalleCardBody.setAttribute("data-bs-toggle","modal");
    botonDetalleCardBody.setAttribute("data-bs-target","#exampleModal");
    
    //card body
    divCardBody.append(tituloCardBody);
    divCardBody.append(descriptCardBody);
    divCardBody.append(precioCardBody);
    divCardBody.append(botonCompraCardBody);
    divCardBody.append(botonDetalleCardBody);


    //card
    divCard.append(imgCardPrducto);
    divCard.append(divCardBody);
    
    divContenedorProducto.append(divCard)
    console.log(divContenedorProducto)
    
    return divContenedorProducto;      

  }

  imprimirModal(producto){
    
  }
}