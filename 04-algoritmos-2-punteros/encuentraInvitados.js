// Práctica 4. Algoritmos de los 2 punteros
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(invitados) {
    let izq = 0;
    let der = 1;

    while (der < invitados.length) {
        //Compara las iniciales de los nombres en las posiciones de ambos punteros.
        if(invitados[izq].charAt(0) === invitados[der].charAt(0)){
            //Si coinciden, detén la búsqueda y devuelve los nombres.
            return [invitados[izq], invitados[der]]
        }
        //Si no coinciden, avanza ambos punteros y repite.
        izq++;
        der++;
    }
    //Detén la búsqueda si recorres toda la lista sin encontrar un par
    return null; // Si no se encuentra ningún par
}

console.log(`Primer par de invitados: ${encontrarPareja(invitados)}`);
// Resultado: ["Carlos", "Cecilia"]

