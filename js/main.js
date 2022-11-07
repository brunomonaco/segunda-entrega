
//Creo el array con los productos
const productos = [
{ id:1, nombre: "tornillo", precio: 200},
{ id:2, nombre: "tuerca", precio: 250},
{ id:3, nombre: "arandela", precio: 300},
{ id:4, nombre: "clavo", precio: 100},
{ id:5, nombre: "martillo", precio: 1000},
{ id:6, nombre: "pinza", precio: 600},
{ id:7, nombre: "llave", precio: 800},
{ id:8, nombre: "soldador", precio: 1800},
{ id:9, nombre: "amoladora", precio: 2000},
]


// Creo la funcion Producto que sirve para crear
// un nuevo prodcuto, cuando la llamo me pide los
// datos de cada uno de los campos.

function Producto(id, nombre, precio){
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;

}

//Creo la variable llamando a la función

const nuevoProducto = new Producto(10,"destornillador",230);


//Declaro otra funcion para 
//agregar productos al array madre

function cargarProducto(arr,valor){
  arr.push(valor);

};

//Llamo a la función y le tengo que ingresar
// dos paramentros

cargarProducto(productos,nuevoProducto);

console.log(cargarProducto);

//Imprimo el nuevo servicio
console.log(nuevoProducto);

//Imprimo el valor anterior
console.log(productos);

//Funciones de filtrado
// Creando una funcion que recibe como parametro el array y
//la palabra que quiero encontrar

function findProductos(arr,filtro){
const encontrado = arr.find((producto)=>{
  return producto.nombre == filtro
})
return encontrado;
};

//Creo la variable que me trae el producto

let productoEncontrado = findProductos(productos,"tuerca");

//Imprimo esta variable

console.log(productoEncontrado);

//Metodo includes

function findProductosInc(arr,filtroInc){
  const encontradoInc = arr.find((producto)=>{
    return producto.nombre.includes(filtroInc);
  })
  return encontradoInc;
  };



 let productoEncontradoInc = findProductosInc(productos,"amo");

// Imprimo la variable

 console.log(productoEncontradoInc);



// Filtrado por precio

function filtrarPorPrecio(arr,filtro){
  return arr.filter((producto)=>{
    return producto.precio <= filtro;
  })
}
// Creo la variable

const menorPrecio = filtrarPorPrecio(productos,1400);

//Imprimo la variable

console.log(menorPrecio);

const canasto=[]

let productoEncontradoInc1 = findProductosInc(productos,"clavo")
let productoEncontradoInc2 = findProductosInc(productos,"sol")

console.log(productoEncontradoInc1);
console.log(productoEncontradoInc2);

//Imprimo el canasto vacio

console.log(canasto);

// Cargo productos

cargarProducto(canasto,productoEncontradoInc1);
cargarProducto(canasto,productoEncontradoInc2);

//Imprimo el nuevo canasto

console.log(canasto);

