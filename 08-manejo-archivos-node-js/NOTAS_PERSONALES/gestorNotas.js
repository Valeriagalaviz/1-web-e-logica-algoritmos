// Práctica 8. Manejo de Archivos con Node.js
// Importar modulo fs
const fs = require('fs');
// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
const agregarNota = (titulo, contenido) => {
  let notas = [];
  // Si el archivo existe, leer el contenido
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath,'utf-8')
    notas = JSON.parse(data);
  }

  //Comprobar que no haya una nota duplicada
  const duplicada = notas.find(nota => nota.titulo === titulo);
  if (duplicada) {
    console.log(`Ya existe una nota con el título "${titulo}".`);
    return;
  }
  // Agregar la nueva nota
  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  // Sobrescribir el archivo con las notas actualizadas
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
const listarNotas = () =>{
  if (fs.existsSync(filePath)) {
    // leer y parsear el contenido del archivo.
    const data = fs.readFileSync(filePath, 'utf-8');
    // JSON.parse para convertir el contenido.
    const notas = JSON.parse(data);

    notas.forEach((nota,index)=>{
        console.log(`${index+1}. ${nota.titulo}: ${nota.contenido}`)
    })
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
const eliminarNota = (titulo) =>{
  if (fs.existsSync(filePath)) {
    // Leer todas las notas.
    const data = fs.readFileSync(filePath, 'utf-8');
    const notas = JSON.parse(data);
    // Filtrar las notas y elimina la que coincida con el título.
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    // Comprobar que se encuentre el título de la nota
    if(notasRestantes.length === notas.length){
        console.log('No se encontro nota con titulo: ${titulo}');
        return;
    }
    // Sobrescribir el archivo con las notas actualizadas.
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
agregarNota('Académico', 'Estudiar Node.js.');
agregarNota('Compras', 'Comprar alimento para mascota');
agregarNota('Compras', 'Comprar alimento para mascota');
agregarNota('Ejercicio', 'Ir al gimnasio');
listarNotas();
eliminarNota('Académico');

