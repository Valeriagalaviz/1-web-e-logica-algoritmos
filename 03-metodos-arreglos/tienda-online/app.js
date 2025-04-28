// Práctica 3. Métodos de Arreglos
//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa", imagen: "./img/camiseta.jpg" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica", imagen: "./img/laptop.jpg" },
    { nombre: "Libro", precio: 12, categoria: "Educación", imagen: "./img/libro.jpg" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa", imagen: "./img/zapatos.jpg" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica", imagen: "./img/celular.jpg" },
];

//filter() para obtener los productos que cuesten menos de $100.
const ProductoMenor = productos.filter(producto => producto.precio < 100);
//imprimimos los productos que cuestan menos de 100
console.log(ProductoMenor);

//sort para ordenar los productos alfabeticamente por su nombre.
/* Se hace uso del método localeCompare que compara dos cadenas que 
devuelve el orden de clasificación:
• -1 si la primera cadena es menor que la segunda
• 0 si las cadenas son iguales
• 1 si la primera cadena es mayor que la segunda 
tambien se agrega la propiedad sensitivity para ignorar la diferencia
entre mayúsculas y minúsculas  */
const ProductosOrden = productos.sort((a,b) => a.nombre.localeCompare(b.nombre, undefined, { sensitivity: 'base' }));
console.log(ProductosOrden);

//map() para agregar un nuevo arreglo que contenga solo los nombres de los productos.
const ArreglosNombres = productos.map(producto => producto.nombre)
console.log(ArreglosNombres);

//reduce() para calcular el precio total de todos los productos.
const PrecioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(`El precio total de los productos es: $${PrecioTotal}`); 

//some() para verificar si alguno de los productos es de la categoría "Electrónica".
const SomeElectonica = productos.some(producto => producto.categoria === 'Electrónica');
console.log(SomeElectonica);

//every() para verificar si todos los productos son de la categoría "Ropa".
const AllRopa = productos.every(producto => producto.categoria === 'Ropa');
console.log(AllRopa);

//
const contenedor = document.getElementById('container');

productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <p>Categoría: ${producto.categoria}</p>
    `;
    contenedor.appendChild(card);
});