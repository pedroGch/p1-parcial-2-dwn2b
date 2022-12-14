let carrito = new Carrito();

function cargarCarritoCheckout(){
  devolverLocalStorage().forEach(element => {
    carrito.agregarProducto(element);
  });
}

function mostrarSubTotal(){
  document.querySelector("#valorSubtotalCompra").innerText = carrito.mostrarPrecioTotalDeLaCompra();
};

function mostrarCostoEnvio(costo){
  document.querySelector("#valorEnvio").innerText = costo;
  mostrarTotal(costo)
}
function mostrarTotal(costo){
  document.querySelector("#valorTotalCompra").innerText = costo + carrito.mostrarPrecioTotalDeLaCompra();
}

function mostrarCantidadTotal(){
  document.querySelector("#tuTotalCantidad").innerText = carrito.cantidadDeProductos();
}

function mostrarProductos(){
  let contenedorUL = document.querySelector("#listaCarrito");
  let productos = carrito.devolverProductos()
  productos.forEach((p) => {
    let li = document.createElement("li");
    li.innerText = `${p.nombre}`;
    contenedorUL.append(li);
  })
}

function devolverLocalStorage() {
  return JSON.parse(localStorage.getItem("productosCarrito"));
}

function ocultarMostrarTarjeta(cadena){
  if (cadena == "mostrar"){
      document.querySelector("#tarjetaDatos").style.display = "block";
  }else{
      document.querySelector("#tarjetaDatos").style.display = "none";
  }
}

document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault()
});

function validarForm(){
 

  let banderas = [];
  //datos de la tarjeta de credito si es que fue seleccionado
  if (document.getElementById("flexRadioTarjetaCredito").checked){  
    banderas.push(validarInput(document.querySelector("#inputtarjeta") ,document.querySelector("#inputtarjeta").value));
    banderas.push(validarInput(document.querySelector("#inputvto") ,document.querySelector("#inputvto").value));
    banderas.push(validarInput(document.querySelector("#inputCodigo") ,document.querySelector("#inputCodigo").value));
    banderas.push(validarInput(document.querySelector("#inputNombreTarjeta") ,document.querySelector("#inputNombreTarjeta").value));
    banderas.push(validarInputSoloTexto(document.querySelector("#inputNombreTarjeta") ,document.querySelector("#inputNombreTarjeta").value));
  }

  banderas.push(validarInput(document.querySelector("#inputNombre"),document.querySelector("#inputNombre").value));
  banderas.push(validarInputSoloTexto(document.querySelector("#inputNombre"),document.querySelector("#inputNombre").value));
  banderas.push(validarInput(document.querySelector("#inputApellido"),document.querySelector("#inputApellido").value));
  banderas.push(validarInputSoloTexto(document.querySelector("#inputApellido"),document.querySelector("#inputApellido").value));
  banderas.push(validarInput(document.querySelector("#inputdni"),document.querySelector("#inputdni").value));
  banderas.push(validarInput(document.querySelector("#inputEmail"),document.querySelector("#inputEmail").value));
  banderas.push(validarInput(document.querySelector("#inputelefono"),document.querySelector("#inputelefono").value));

  (banderas.indexOf(false) == -1) ?  imprimirCartelTodoOk () : imprimirCartelError();
}

function validarInput(elemento, valor){
  //si el valor del elemento es nulo se debe agregar un cartel de error en el elemento 
  if (valor == ""){
    //pintar error
    let errorText = elemento.nextElementSibling;
    errorText.innerText = "El campo no puede estar vacío";
    errorText.style.color = "#f44336";
    return false;
  }
  return true;
}

function quitarError(element){
  let errorText  = element.nextElementSibling;
  errorText.innerText = "";
}

function validarInputSoloTexto(element, valor) {
//si el valor del elemento no es un número se debe agregar un cartel de error en el elemento 
if (!isNaN(valor)){
  //pintar error
  let errorText = element.nextElementSibling;
  errorText.innerText = "Debes ingresar sólo texto";
  errorText.style.color = "#f44336";
  return false;
}
return true;

}

function imprimirCartelTodoOk(){
  swal("¡Felicidades! los productos ya son tuyos", "en breve seras redirigido al inicio", "success");
  carrito.quitarTodosLosProducto();
  actualizarLocalStorage();
  setTimeout(function(){
    window.location.href = 'index.html'
  },8000)
}

function imprimirCartelError(){
  swal ( "Oops" ,  "parece que te quedaron campos vacíos o incorrectos!" ,  "error" );
}


cargarCarritoCheckout();
mostrarSubTotal();
mostrarCostoEnvio(0);
mostrarCantidadTotal();
mostrarProductos();

