//Crear un arreglo vacio llamado listaDeCompras
let listaDeCompras = [];

//Funcion para agregar producto al final de la lista con arrow function
//Compara que el producto no exista en la lista
const agregarProducto = (producto) => {
    if (listaDeCompras.includes(producto)) {
        console.log("Este producto ya existe en la lista");
    }
    else{
        listaDeCompras.push(producto);
    }
}

//Función para eliminar un producto de la lista con arrow function con filter
const eliminarProducto = productoAEliminar => {
    let nuevaLista = listaDeCompras.filter(producto => producto !== productoAEliminar);
    listaDeCompras = nuevaLista;
}

//Función que imprima todos los productos de la lista con arrow function
const mostrarLista = () => {
    listaDeCompras.forEach(producto => console.log(producto));
}

agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Mantequilla");
agregarProducto("Yogurt");

console.log(listaDeCompras);

eliminarProducto("Pan");

console.log(listaDeCompras);

mostrarLista();
console.log(listaDeCompras);

agregarProducto("Leche");